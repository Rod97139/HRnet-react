import { Link } from 'react-router-dom';
import './Home.scss';
import ReactModal from '../../components/home/reactModal/ReactModal';
import EmployeeForm from '../../components/home/employeeForm/EmployeeForm';
import { useState } from 'react';

const Home = () => {
  
  const [shouldOpenModal, setShouldOpenModal] = useState(false);

  return (
    <>
      <div className="container">
            <Link to="/employee-list">View Current Employees</Link>
            <h2>Create Employee</h2>
            <EmployeeForm setShouldOpenModal={setShouldOpenModal}/> 
      </div>
        <ReactModal shouldOpenModal={shouldOpenModal} setShouldOpenModal={setShouldOpenModal}/>
    </>
  )
}

export default Home
