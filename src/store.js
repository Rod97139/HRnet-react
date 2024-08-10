import { configureStore } from '@reduxjs/toolkit';
import { employeeSlice } from './slices/employeeSlice';

const store = configureStore({
  reducer: {
    employeeList: employeeSlice.reducer,
  }
})

export default store