// Import action types for user reducer
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, SIGNOUT_REQUEST, SIGNOUT_SUCCESS, SIGNOUT_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/actionType";




const userInitialState = {
    isLoading: false,
    userData: null,
    error: null,
  };
  
  export const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userData: action.payload,
                error: null,
            };
        case SIGNUP_FAILURE:
            return {
                ...state,
                isLoading: false,
                userData: null,
                error: action.payload,
            };
        case SIGNOUT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case SIGNOUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userData: null,
                error: null,
            };
        case SIGNOUT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
            case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userData: action.payload,
                error: null,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                userData: null,
                error: action.payload,
            };
        default:
            return state;
    }
  };

export default userReducer;
