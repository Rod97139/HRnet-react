import { useSelector } from "react-redux"
import { getEmployeeList } from "../../../selectors";
import { useState } from "react";

const EmployeeTable = () => {
    const data = useSelector(getEmployeeList)
    const [filteredData, setFilteredData] = useState(data)

    const searchItem = (e) => {
        const searchValue = e.target.value

        if (searchValue.length === 0) {
            setFilteredData(data)
            return
        }

        const filteredData = data.filter(item => {
            return Object.values(item).some(value => 
                value.toLowerCase().includes(searchValue.toLowerCase())
            )
        })
        setFilteredData(filteredData)
    }



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
            <input onChange={searchItem} type="text" placeholder="Search by Name" />

        </div>
        <table>
            <thead>
                <tr>
                    {/* // automatically generated table headers from the item object */}
                    {/* // with a capitalize and space between camelcase  */}
                    {data.length > 0 && Object.keys(data[0]).map((key, index) => {
                        return <th key={index}>{key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) =>  str.toUpperCase())}</th>
                    })}

                    {/* <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date of Birth</th>
                    <th>Start Date</th>
                    <th>Department</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th> */}
                </tr>
            </thead>
            <tbody>
            {filteredData.map((item, index) => {
                return (
                    <tr key={index}>
                        {Object.values(item).map((value, index) => {
                            return <td key={index}>{value}</td>
                        })}
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
