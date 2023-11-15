// Import action types for both reducers
import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE, FETCH_TUTOR_REQUEST, FETCH_TUTOR_SUCCESS, FETCH_TUTOR_FAILURE, 
    CREATE_TUTOR_REQUEST, CREATE_TUTOR_SUCCESS, CREATE_TUTOR_FAILURE, GET_USER_TUTORS_REQUEST, GET_USER_TUTORS_SUCCESS, GET_USER_TUTORS_FAILURE } from "../actions/actionType";
import { combineReducers } from 'redux';

// Search Reducer
const searchInitialState = {
  isLoading: false,
  data: null,
  error: null,
};

export const searchReducer = (state = searchInitialState, action) => {
  switch (action.type) {
      case SEARCH_REQUEST:
          return {
              ...state,
              isLoading: true,
              error: null,
          };
      case SEARCH_SUCCESS:
          return {
              ...state,
              isLoading: false,
              data: action.payload,
              error: null,
          };
      case SEARCH_FAILURE:
          return {
              ...state,
              isLoading: false,
              data: null,
              error: action.payload,
          };
      default:
          return state;
  }
};

// Tutor Reducer
const tutorInitialState = {
  isLoading: false,
  tutorData: null,
  error: null,
};

export const tutorReducer = (state = tutorInitialState, action) => {
  switch (action.type) {
      case FETCH_TUTOR_REQUEST:
          return {
              ...state,
              isLoading: true,
              error: null,
          };
      case FETCH_TUTOR_SUCCESS:
          return {
              ...state,
              isLoading: false,
              data: action.payload,
              error: null,
          };
      case FETCH_TUTOR_FAILURE:
          return {
              ...state,
              isLoading: false,
              data: null,
              error: action.payload,
          };
          case CREATE_TUTOR_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case CREATE_TUTOR_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: null,
            };
        case CREATE_TUTOR_FAILURE:
            return {
                ...state,
                isLoading: false,
                data: null,
                error: action.payload,
            };
      default:
          return state;
  }
};

const userInitialState = {
    isLoading: false,
    userData: null,
    error: null,
};

export const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case GET_USER_TUTORS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case GET_USER_TUTORS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userData: action.payload,
                error: null,
            };
        case GET_USER_TUTORS_FAILURE:
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

const rootReducer = combineReducers({
  search: searchReducer,
  tutor: tutorReducer,
  user: userReducer,
});

export default rootReducer;
