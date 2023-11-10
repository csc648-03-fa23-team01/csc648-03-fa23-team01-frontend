// src/actions/searchActions.js
import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE, FETCH_TUTOR_FAILURE,FETCH_TUTOR_SUCCESS,FETCH_TUTOR_REQUEST } from "./actionType";

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
  payload: error,
});


export const fetchTutor = (user_id) => async (dispatch) => {
  // Convert user_id to string and log it for debugging
  user_id = String(user_id);

  const queryAddress = `http://localhost:8000/tutor?id=${encodeURIComponent(user_id)}`;

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

    // Dispatch a success action with the fetched data
    console.log("Data received:", data); // Debugging log

    dispatch(TutorSuccess (data ));
  } catch (error) {
    // Dispatch a failure action if an error occurs during the API request
    dispatch(TutorFailure());
  }
};
