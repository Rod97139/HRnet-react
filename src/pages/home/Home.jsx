import './Home.scss';
import ReactModal from '../../components/home/reactModal/ReactModal';
import EmployeeForm from '../../components/home/employeeForm/EmployeeForm';
import { useState } from 'react';

const Home = () => {
  
  const [shouldOpenModal, setShouldOpenModal] = useState(false);

  return (
    <>
      <div className="container">
            <EmployeeForm setShouldOpenModal={setShouldOpenModal}/> 
      </div>
      <ReactModal shouldOpenModal={shouldOpenModal} setShouldOpenModal={setShouldOpenModal}/>
    </>
  )
}

export default Home
