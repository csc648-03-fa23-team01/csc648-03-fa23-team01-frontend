// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { searchReducer, tutorReducer } from '../reducers/RootReducers';

const store = configureStore({
    reducer: {
      search: searchReducer,
      tutors: tutorReducer

    },
  });

  export const RootState = store.getState;
  export const AppDispatch = store.dispatch;
  
  export default store;
