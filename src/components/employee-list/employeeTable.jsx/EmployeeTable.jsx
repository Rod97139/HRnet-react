import { useSelector } from "react-redux"
import { getEmployeeList } from "../../../selectors";
import ReactDataTable from "./ReactDataTable";

const EmployeeTable = () => {
    const employees = useSelector(getEmployeeList)
    return (
        <ReactDataTable data={employees} />
    )
}

export default EmployeeTable
