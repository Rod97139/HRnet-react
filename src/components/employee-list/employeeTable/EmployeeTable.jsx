import { useSelector } from "react-redux"
import { getEmployeeList } from "../../../selectors";
import {ReactDataTable} from "react-data-table-by-rod-dev";
import './EmployeeTable.scss';

const EmployeeTable = () => {
    const employees = useSelector(getEmployeeList)
    
    return (
        <ReactDataTable data={employees} dateFormatKey={['dateOfBirth', 'startDate']} />
    )
}

export default EmployeeTable
