// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import tutorReducer from '../reducers/tutorReducers'; // Import the tutor reducer

const store = configureStore({
    reducer: {
      tutors: tutorReducer,
    },
  });
export default store;
