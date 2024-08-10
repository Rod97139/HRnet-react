import { useSelector } from "react-redux"
import { getEmployeeList } from "../../../selectors";

const EmployeeTable = () => {
    const employees = useSelector(getEmployeeList)
    console.log(employees);

  return (
    <div className="employee-table-container">
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date of Birth</th>
                    <th>Start Date</th>
                    <th>Department</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                </tr>
            </thead>
            <tbody>
            {employees.map((employee) => {
                return (
                    <tr key={employee.id}>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.dateOfBirth}</td>
                        <td>{employee.startDate}</td>
                        <td>{employee.department}</td>
                        <td>{employee.street}</td>
                        <td>{employee.city}</td>
                        <td>{employee.state}</td>
                        <td>{employee.zipCode}</td>
                    </tr>
                )
            })}

                
            </tbody>
        </table>
    </div>
  )
}

export default EmployeeTable
