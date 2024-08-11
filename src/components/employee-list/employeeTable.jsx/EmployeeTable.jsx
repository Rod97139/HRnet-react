import { useSelector } from "react-redux"
import { getEmployeeList } from "../../../selectors";

const EmployeeTable = () => {
    const employees = useSelector(getEmployeeList)

  return (
    <div className="data-table-container">
        <div className="data-table-length">
            <label htmlFor="data-table-length">Show</label>
            <select name="data-table-length" id="data-table-length">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
            <label htmlFor="data-table-length">entries</label>


        </div>
        <div className="data-table-filter">
            <input type="text" placeholder="Search by Name" />

        </div>
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
            {employees.map((employee, index) => {
                return (
                    <tr key={index}>
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
        <div className="data-table-info">
            <p>Showing 1 to 10 of 100 entries</p>
        </div>
        <div className="data-table-paginate">
            <button>Prev</button>
            <button>Next</button>
        </div>
    </div>
  )
}

export default EmployeeTable
