import { Link } from 'react-router-dom';
import './Home.scss';
import ReactDatePicker from '../../components/home/reactDatePicker/ReactDatePicker';
import DropDown from '../../components/home/dropDown/DropDown';
import ReactModal from '../../components/home/reactModal/ReactModal';
import { states } from '../../models/states';

const Home = () => {
  return (
    <>
      <div className="container">
            <Link to="/employee-list">View Current Employees</Link>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <ReactDatePicker />

                <label htmlFor="start-date">Start Date</label>
                  <ReactDatePicker/>

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <DropDown name={"state"}
                              content={states}
                    />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </fieldset>

                <label htmlFor="department">Department</label>
                <DropDown name={"department"} 
                          content={["Sales", 
                                    "Marketing", 
                                    "Engineering", 
                                    "Human Resources",
                                    "Legal"]} />
            </form>
            <button >Save</button>
      </div>
        <ReactModal />
    </>
  )
}

export default Home
