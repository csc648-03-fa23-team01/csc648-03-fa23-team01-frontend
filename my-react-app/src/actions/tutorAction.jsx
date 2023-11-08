// src/actions/searchActions.js
import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from "./actionType";

// Action Types


// Action Creators
const searchRequest = () => ({
  type: SEARCH_REQUEST,
});

const searchSuccess = (data) => ({
  type: SEARCH_SUCCESS,
  payload: data,
});

const searchFailure = (error) => ({
  type: SEARCH_FAILURE,
  payload: error,
});

// Async Action: Fetch search results from an API
export const searchAsync = (query, type) => async (dispatch) => {
  // Dispatch a request action to indicate the start of the API call
  let typeValue = String(type);  // Convert to string just in case
  const queryAddress = `http://localhost:8000/search?type=${encodeURIComponent(typeValue)}`;

  dispatch(searchRequest());

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
    dispatch(searchSuccess(data));
  } catch (error) {
    // Dispatch a failure action if an error occurs during the API request
    dispatch(searchFailure(error.message));
  }
};

export const fetchTutor = (query, type) => async (dispatch) => {
  // Dispatch a request action to indicate the start of the API call
  let typeValue = String(type);  // Convert to string just in case
  const queryAddress = `http://localhost:8000/tutor?id=${encodeURIComponent(typeValue)}`;

  dispatch(searchRequest());

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
    dispatch(searchSuccess(data));
  } catch (error) {
    // Dispatch a failure action if an error occurs during the API request
    dispatch(searchFailure(error.message));
  }
};
