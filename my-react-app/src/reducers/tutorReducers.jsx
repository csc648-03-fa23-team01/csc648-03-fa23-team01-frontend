import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from "../actions/actionType";

// Initial state for the reducer
const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

const searchReducer = (state = initialState, action) => {
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

export default searchReducer;
  