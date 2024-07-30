import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReactDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
  
  return (
    <DatePicker
        showIcon
        selected={startDate}
        onChange={(newDate) => setStartDate(newDate)}
    />
  )
}

export default ReactDatePicker
