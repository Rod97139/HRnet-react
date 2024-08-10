import { configureStore } from '@reduxjs/toolkit';
import { employeeSlice } from './slices/employeeSlice';

let state = {
  employeeList: []
};

const store = configureStore({
  preloadedState: state,
  reducer: {
    employeeList: employeeSlice.reducer,
  }
})

export default store