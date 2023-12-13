// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { searchReducer, tutorReducer,sentMessagesReducer } from '../reducers/RootReducers';
import {userReducer} from '../reducers/userReducer';

const store = configureStore({
    reducer: {
      search: searchReducer,
      tutors: tutorReducer,
      users: userReducer,
      messages: sentMessagesReducer

    },
  });

  export const RootState = store.getState;
  export const AppDispatch = store.dispatch;
  
  export default store;
