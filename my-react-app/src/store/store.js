// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import tutorReducer from '../reducers/tutorReducers'; // Import the tutor reducer

const store = configureStore({
    reducer: {
      tutors: tutorReducer,
    },
  });

  export const RootState = store.getState;
  export const AppDispatch = store.dispatch;
  
  export default store;
