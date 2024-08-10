import ReactDatePicker from '../reactDatePicker/ReactDatePicker'
import DropDown from '../dropDown/DropDown'
import { states } from '../../../models/states'
import { useState } from 'react'
import { addEmployee } from '../../../slices/employeeSlice'
import { useDispatch } from 'react-redux'

const EmployeeForm = ({setShouldOpenModal}) => {

    const dispatch = useDispatch()
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState(new Date().toLocaleDateString('en-EN'))
    const [startDate, setStartDate] = useState(new Date().toLocaleDateString('en-EN'))
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('AL')
    const [zipCode, setZipCode] = useState('')
    const [department, setDepartment] = useState('Sales')

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            let data = {
                firstName,
                lastName,
                dateOfBirth,
                startDate,
                department,
                street,
                city,
                state,
                zipCode
            }
            dispatch(addEmployee(data))
            setShouldOpenModal(true)
            e.target.reset()

        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
        <form action="#" id="create-employee" onSubmit={
                (e) => handleSubmit(e)
            }>
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" required 
            onChange={(e) => setFirstName(e.target.value)}
            />

            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" required
            onChange={(e) => setLastName(e.target.value)}
            />

            <label htmlFor="date-of-birth">Date of Birth</label>
            <ReactDatePicker setInput={setDateOfBirth} />

            <label htmlFor="start-date">Start Date</label>
                <ReactDatePicker setInput={setStartDate} />

            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input id="street" type="text" required
                onChange={(e) => setStreet(e.target.value)}
                />

                <label htmlFor="city">City</label>
                <input id="city" type="text" required
                onChange={(e) => setCity(e.target.value)}
                />

                <label htmlFor="state">State</label>
                <DropDown name={"state"} content={states} setInput={setState}
                />

                <label htmlFor="zip-code">Zip Code</label>
                <input id="zip-code" type="number" required
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
            <button type='submit'>Save</button>
        </form>
    </>
  )
}

export default EmployeeForm
