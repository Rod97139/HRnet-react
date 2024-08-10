import { Link } from "react-router-dom"
import EmployeeTable from "../../components/employee-list/employeeTable.jsx/EmployeeTable"

const EmployeeList = () => {
  return (
    <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <EmployeeTable />
        <Link to="/">Home</Link>
    </div>
  )
}

export default EmployeeList
