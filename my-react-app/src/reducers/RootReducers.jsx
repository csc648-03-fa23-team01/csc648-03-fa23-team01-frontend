// Import action types for both reducers
import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from "../actions/actionType";
import { FETCH_TUTOR_REQUEST, FETCH_TUTOR_SUCCESS, FETCH_TUTOR_FAILURE } from "../actions/actionType";
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
      default:
          return state;
  }
};

const rootReducer = combineReducers({
  search: searchReducer,
  tutor: tutorReducer
});

export default rootReducer;
