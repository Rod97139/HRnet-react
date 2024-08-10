import { createSlice } from '@reduxjs/toolkit'

const employeeList = localStorage.getItem('employees')
            ? JSON.parse(localStorage.getItem('employees'))
            : []

export const employeeSlice = createSlice({
  name: 'employeeList',
  initialState : {
    employeeList: employeeList
  },
  reducers: {
    addEmployee: (currentState, action) => {
        const listWithNewEmployee = [...currentState, action.payload]
        return listWithNewEmployee
    },
  },
})

export const { addEmployee } = employeeSlice.actions