// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './slices/employeeSlice';
// import { authApi } from './service/authService';
// import {thunk} from "redux-thunk";

// let state = {
// employeeList: []
// };

// const store = configureStore({
//   preloadedState: state,
//   reducer: {
//     auth: authReducer,
//     [authApi.reducerPath]: authApi.reducer
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(authApi.middleware).concat(thunk),
// })

// export default store