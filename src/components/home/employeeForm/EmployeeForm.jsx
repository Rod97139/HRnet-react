import ReactDatePicker from '../reactDatePicker/ReactDatePicker'
import DropDown from '../dropDown/DropDown'
import { states } from '../../../models/states'
import { useState } from 'react'
import { addEmployee } from '../../../slices/employeeSlice'

const EmployeeForm = () => {
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [startDate, setStartDate] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [department, setDepartment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            let data = {
                firstName,
                lastName,
                dateOfBirth,
                startDate,
                street,
                city,
                state,
                zipCode,
                department
            }
            dispatch(addEmployee(data))
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
        <form action="#" id="create-employee">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" 
            onChange={(e) => setFirstName(e.target.value)}
            />

            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" 
            onChange={(e) => setLastName(e.target.value)}
            />

            <label htmlFor="date-of-birth">Date of Birth</label>
            <ReactDatePicker setInput={setDateOfBirth} />

            <label htmlFor="start-date">Start Date</label>
                <ReactDatePicker setInput={setStartDate} />

            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input id="street" type="text" 
                onChange={(e) => setStreet(e.target.value)}
                />

                <label htmlFor="city">City</label>
                <input id="city" type="text" 
                onChange={(e) => setCity(e.target.value)}
                />

                <label htmlFor="state">State</label>
                <DropDown name={"state"} content={states} setInput={setState}
                />

                <label htmlFor="zip-code">Zip Code</label>
                <input id="zip-code" type="number" 
                onChange={(e) => setZipCode(e.target.value)}
                />
            </fieldset>

            <label htmlFor="department">Department</label>
            <DropDown name={"department"} 
                      content={["Sales", 
                                "Marketing", 
                                "Engineering", 
                                "Human Resources",
                                "Legal"]} 
                      setInput={setDepartment}
            />
        </form>
        <button >Save</button>
    </>
  )
}

export default EmployeeForm
