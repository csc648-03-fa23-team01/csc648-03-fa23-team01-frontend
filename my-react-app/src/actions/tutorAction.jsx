// src/actions/searchActions.js
import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE, FETCH_TUTOR_FAILURE,FETCH_TUTOR_SUCCESS,
    FETCH_TUTOR_REQUEST, CREATE_TUTOR_REQUEST, CREATE_TUTOR_SUCCESS, CREATE_TUTOR_FAILURE } from "./actionType";
    import { Auth } from 'aws-amplify'
  
  
  // Action Types
  
  
  // Action Creators
  const SearchRequest = () => ({
    type: SEARCH_REQUEST,
  });
  
  const SearchSuccess = (data) => ({
    type: SEARCH_SUCCESS,
    payload: data,
  });
  
  const SearchFailure = (error) => ({
    type: SEARCH_FAILURE,
    payload: error,
  });
  
  // Async Action: Fetch search results from an API
  export const searchAsync = (query, type) => async (dispatch) => {
    // Dispatch a request action to indicate the start of the API call
    let typeValue = String(type);  // Convert to string just in case
    console.log("typeValue: " + typeValue);
    const queryAddress = `${process.env.REACT_APP_BACKEND_URL}/search?type=${encodeURIComponent(typeValue)}`;
  
    dispatch(SearchRequest());
  
    try {
      const response = await fetch(queryAddress, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: query
        }),
      });
  
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      // Dispatch a success action with the fetched data
      dispatch(SearchSuccess(data));
    } catch (error) {
      // Dispatch a failure action if an error occurs during the API request
      dispatch(SearchFailure(error.message));
    }
  };
  
  const TutorRequest = () => ({
    type: FETCH_TUTOR_REQUEST,
  });
  
  const TutorSuccess = (data) => ({
    type: FETCH_TUTOR_SUCCESS,
    payload: data,
  });
  
  const TutorFailure = (error) => ({
    type: FETCH_TUTOR_FAILURE,
    payload: {
      message: error.message,
      code: error.code, // If applicable
      // Other relevant properties
    },
  });
  
  
  export const fetchTutor = (user_id) => async (dispatch) => {
    // Convert user_id to string and log it for debugging
    user_id = String(user_id);
  
    const queryAddress = `${process.env.REACT_APP_BACKEND_URL}/tutor?id=${encodeURIComponent(user_id)}`;
    console.log(queryAddress);
    // Dispatch the request action
  
    dispatch(TutorRequest());
  
    try {
      // Execute the API request
      console.log("Sending request"); // Debugging log
  
      const response = await fetch(queryAddress, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      // Check if response is ok
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Parse the JSON response
      const data = await response.json();
  
      // Dispatch a success action with the fetched data
      console.log("Data received:", data); // Debugging log
  
      dispatch(TutorSuccess (data ));
    } catch (error) {
      // Dispatch a failure action if an error occurs during the API request
      dispatch(TutorFailure());
    }
  };
  // Action Creators
  const becomeTutorRequest = () => ({
    type: CREATE_TUTOR_REQUEST,
  });
  
  const becomeTutorSuccess = (data) => ({
    type: CREATE_TUTOR_SUCCESS,
    payload: data,
  });
  
  // Action Creators
  const becomeTutorFailure = (error) => ({
      type: CREATE_TUTOR_FAILURE,
      payload: {
        message: error.message,
        code: error.code, // If applicable
        // Other relevant properties
      },
    });
    
  
  // Async Action: Fetch search results from an API
  export const becomeTutor = (resume, selectedTopic, classes, language, days, sessionType, about, picture, video, agree ) => async (dispatch) => {
    // Dispatch a request action to indicate the start of the API call
    dispatch(becomeTutorRequest());
  
    try {
      // Get the current authenticated user
      const user = await Auth.currentAuthenticatedUser();
  
      // Update user attributes to mark as a tutor
      await Auth.updateUserAttributes(user, {
        'custom:is_tutor': 'True',
      });
  
      // Your API endpoint for creating a tutor
      const queryAddress = `${process.env.REACT_APP_BACKEND_URL}/createTutor`;
      console.log("Resume key", resume);
      console.log("Picture key", picture);
      console.log("video key", video);
  
  
      var inPerson = false;
      if(sessionType == "In Person"){
        inPerson = true;
      }
      // Construct the tutor object to be sent in the request body
      const tutorData = {
        user_email: user.attributes.email, // Use the user's email as the identifier
        average_ratings: 0.0, // Set appropriate initial values
        classes: classes, // Set appropriate initial values
        description: about, // Set appropriate initial values
        price: 0.0, // Set appropriate initial values
        main_languages: language, // Set appropriate initial values
        prefer_in_person: inPerson, // Set appropriate initial values
        cv_link: resume, // Use the S3 key for the resume file
        other_languages: '', // Set appropriate initial values
        profile_picture_link: picture, // Use the S3 key for the profile picture file
        video_link: video, // Use the S3 key for the video file
        topics: selectedTopic.split(","), // An array of selected topics
        times: days, // An array of selected times
      };
      console.log("Tutor data:", tutorData); // Debugging log
      const response = await fetch(queryAddress, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tutorData), // Pass the tutor object in the request body
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(`${data}`);
      }
  
      console.log('Become a tutor successful:', response);
  
      // Dispatch a success action with the fetched data
      dispatch(becomeTutorSuccess(tutorData));
    } catch (error) {
      // Handle errors and dispatch failure action
      console.error('Become a tutor failed:', JSON.stringify(error));
      dispatch(becomeTutorFailure(error));
    }
  };
  