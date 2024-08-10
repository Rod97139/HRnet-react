import { Link } from 'react-router-dom';
import './Home.scss';
import ReactModal from '../../components/home/reactModal/ReactModal';
import EmployeeForm from '../../components/home/employeeForm/EmployeeForm';

const Home = () => {
  return (
    <>
      <div className="container">
            <Link to="/employee-list">View Current Employees</Link>
            <h2>Create Employee</h2>
            <EmployeeForm /> 
      </div>
        <ReactModal />
    </>
  )
}

export default Home
