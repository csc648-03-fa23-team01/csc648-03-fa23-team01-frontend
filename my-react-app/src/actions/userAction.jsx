// src/actions/userAction.js
import * as ActionTypes from "./actionType";
import { Auth } from 'aws-amplify'


// Action Types


// Action Creators
const GetUserTutorsRequest = () => ({
  type: ActionTypes.GET_USER_TUTORS_REQUEST,
});

const GetUserTutorsSuccess = (data) => ({
  type: ActionTypes.GET_USER_TUTORS_SUCCESS,
  payload: data,
});

const GetUserTutorsFailure = (error) => ({
  type: ActionTypes.GET_USER_TUTORS_FAILURE,
  payload: error,
});

// Async Action: Fetch search results from an API
export const getUserTutors = (user_id) => async (dispatch) => {
  // Dispatch a request action to indicate the start of the API call
  const queryAddress = `${process.env.REACT_APP_BACKEND_URL}/userTutors?user_id=${encodeURIComponent(user_id)}`;

  dispatch(GetUserTutorsRequest());

  try {
    const response = await fetch(queryAddress, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();

    // Dispatch a success action with the fetched data
    dispatch(GetUserTutorsSuccess(data));
  } catch (error) {
    // Dispatch a failure action if an error occurs during the API request
    dispatch(GetUserTutorsFailure(error.message));
  }
};
const signUpRequest = () => ({
  type: ActionTypes.SIGNUP_REQUEST,
});

const signUpSuccess = (data) => ({
  type: ActionTypes.SIGNUP_SUCCESS,
  payload: data,
});

// Action Creators
const signUpFailure = (error) => ({
    type: ActionTypes.SIGNUP_FAILURE,
    payload: {
      message: error.message,
      code: error.code, // If applicable
      // Other relevant properties
    },
  });
  

// Async Action: Fetch search results from an API
export const signUp = (firstName, lastName, email, password, sfsuId) => async (dispatch) => {
  // Dispatch a request action to indicate the start of the API call
  const queryAddress = `${process.env.REACT_APP_BACKEND_URL}/createUsers`;
  
  dispatch(signUpRequest());

    try {
        const response = await fetch(queryAddress, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            email: email,
          }),
        });
        const data = await response.json();
      
          if (!response.ok) {
              throw new Error(`${data["detail"]}`);
          }        
        const signUpResponse = await Auth.signUp({
          username: email,
          password,
          attributes: {
            given_name: firstName,
            family_name: lastName,
            'custom:is_tutor' : 'False',
            'custom:sfsuId' : sfsuId
          },
          autoSignIn: {
            enabled: true
          }
        });
        console.log("passed signup");
        // we want to only add in attributes we need and not the whole cognito object
        const userAttributes = {
          email: signUpResponse.user.getUsername(), // or other relevant method
          // other necessary attributes
        };
        
        console.log('Sign up successful', userAttributes);
        
        // Dispatch a success action with the fetched data
        dispatch(signUpSuccess({firstName: firstName, lastName: lastName, email: email,isTutor: false}));  
      } catch (error) {
        // IF there are errors our validations missed we display them
        console.log("error: ", error);
        dispatch(signUpFailure(error));
         
      }
};
const loginRequest = () => ({
  type: ActionTypes.LOGIN_REQUEST,
});

const loginSuccess = (data) => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload: data,
});

// Action Creators
const loginFailure = (error) => ({
    type: ActionTypes.LOGIN_FAILURE,
    payload: {
      message: error.message,
      code: error.code, // If applicable
      // Other relevant properties
    },
  });
export const login = (email, password) => async (dispatch) => {
  // Dispatch a request action to indicate the start of the API call
  
  dispatch(loginRequest());

    try {
      console.log("Type of email: ", typeof email);
        const user = await Auth.signIn({ username: email, password });
        console.log("User: ", user.attributes);
        dispatch(loginSuccess({firstName: user.attributes.given_name, lastName: user.attributes.family_name, email: user.attributes.email,isTutor: user.attributes['custom:is_tutor']=='True'}));  
      } catch (error) {
        // IF there are errors our validations missed we display them
        console.log("error: ", error);
        dispatch(loginFailure(error));  
      }

};

const signOutRequest = () => ({
  type: ActionTypes.SIGNOUT_REQUEST,
});

const signOutSuccess = () => ({
  type: ActionTypes.SIGNOUT_SUCCESS,
});

// Action Creators
const signOutFailure = (error) => ({
    type: ActionTypes.SIGNOUT_FAILURE,
    payload: {
      message: error.message,
      code: error.code, // If applicable
      // Other relevant properties
    },
  });

export const signOut = () => async (dispatch) => {
  // Dispatch a request action to indicate the start of the API call

  dispatch(signOutRequest());

    try {
        await Auth.signOut({ global: true });
        dispatch(signOutSuccess());  
      } catch (error) {
        // IF there are errors our validations missed we display them
        console.log("error: ", error);
        dispatch(signOutFailure(error));
         
      }
};

// Action Creators
const getUserRequest = () => ({
    type: ActionTypes.GETUSER_REQUEST,
  });
  
  const getUserSuccess = (data) => ({
    type: ActionTypes.GETUSER_SUCCESS,
    payload: data,
  });
  
  const getUserFailure = (error) => ({
    type: ActionTypes.GETUSER_FAILURE,
    payload: error,
  });

  export const getUser = (email) => async (dispatch) => {
  
    const queryAddress = `${process.env.REACT_APP_BACKEND_URL}/user?id=${encodeURIComponent(email)}`;
  
    // Dispatch the request action
  
    dispatch(getUserRequest());
  
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
  
      dispatch(getUserSuccess (data ));
    } catch (error) {
      // Dispatch a failure action if an error occurs during the API request
      dispatch(getUserFailure());
    }
  };
