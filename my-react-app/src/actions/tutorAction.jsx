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
  console.log("searchAsync");
  try {
    const response = await fetch('http://127.0.0.1:8000/search',{
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
        console.log(data);

    // Dispatch a success action with the fetched data
    dispatch(searchSuccess(data));
  } catch (error) {
    // Dispatch a failure action if an error occurs during the API request
    dispatch(searchFailure(error.message));
  }
};
