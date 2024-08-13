import { useSelector } from "react-redux"
import { getEmployeeList } from "../../../selectors";
import {ReactDataTable} from "react-data-table-by-rod-test-v2";
import './ReactDataTable.css';

const EmployeeTable = () => {
    const employees = useSelector(getEmployeeList)
    
    return (
        <ReactDataTable data={employees} />
    )
}

export default EmployeeTable
