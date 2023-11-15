// src/actions/searchActions.js
import { GET_USER_TUTORS_REQUEST, GET_USER_TUTORS_SUCCESS, GET_USER_TUTORS_FAILURE,} from "./actionType";

// Action Types


// Action Creators
const GetUserTutorsRequest = () => ({
  type: GET_USER_TUTORS_REQUEST,
});

const GetUserTutorsSuccess = (data) => ({
  type: GET_USER_TUTORS_SUCCESS,
  payload: data,
});

const GetUserTutorsFailure = (error) => ({
  type: GET_USER_TUTORS_FAILURE,
  payload: error,
});

// Async Action: Fetch search results from an API
export const getUserTutors = (user_id) => async (dispatch) => {
  // Dispatch a request action to indicate the start of the API call
  const queryAddress = `${process.env.REACT_APP_BACKEND_URL}/userTutors?user_id=${encodeURIComponent(user_id)}`;

  dispatch(GetUserRequest());

  try {
    const response = await fetch(queryAddress, {
      method: 'GET',
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
    dispatch(GetUserSuccess(data));
  } catch (error) {
    // Dispatch a failure action if an error occurs during the API request
    dispatch(GetUserFailure(error.message));
  }
};