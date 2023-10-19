// src/actions/searchActions.js

// Action Types
export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

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
export const searchAsync = (query) => async (dispatch) => {
  // Dispatch a request action to indicate the start of the API call
  dispatch(searchRequest());

  try {
    const response = await fetch(`API_ENDPOINT?query=${query}`);
    if (!response.ok) {
      // Handle non-successful HTTP responses here (e.g., 404, 500, etc.)
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();

    // Dispatch a success action with the fetched data
    dispatch(searchSuccess(data));
  } catch (error) {
    // Dispatch a failure action if an error occurs during the API request
    dispatch(searchFailure(error.message));
  }
};
