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
  // Dispatch the request action

  dispatch(TutorRequest());

  try {
    // Execute the API request

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
export const becomeTutor = (resume, topic, about, picture, video, agree) => async (dispatch) => {
  // Dispatch a request action to indicate the start of the API call
  const queryAddress = `${process.env.REACT_APP_BACKEND_URL}/createTutor`;

  dispatch(becomeTutorRequest());

    try {
        const response = await fetch(queryAddress, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            resume: resume,
            topic: topic,
            about: about,
            picture: picture,
            video: video,
            agree: agree
          }),
        });
        const data = await response.json();
      
        if (!response.ok) {
            throw new Error(`${data}`);
        }        
        try {
          const user = await Auth.currentAuthenticatedUser();
          const result = await Auth.updateUserAttributes(user, {
            attributes: {
              'custom:is_tutor' : 'True',
            }
          });
        } catch(err) {
          console.log("|Arias Custom message| Update attribute failed!: ", err);
        }


        console.log("passed signup");
        
        console.log('Udate tutor attribute successful', response);
        
        // Dispatch a success action with the fetched data
        dispatch(becomeTutorSuccess(resume, topic, about, picture, video, agree));  
      } catch (error) {
        // IF there are errors our validations missed we display them
        console.log("|Aria Custom Message!|Dispatch of tutor failed!: ", error);
        dispatch(becomeTutorFailure(error));
         
      }
};