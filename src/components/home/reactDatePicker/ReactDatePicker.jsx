import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReactDatePicker = ({setInput}) => {
    const [date, setDate] = useState(new Date());
  
  return (
    <DatePicker
        showIcon
        selected={date}
        onChange={(newDate) => {
          setDate(newDate)
          setInput(newDate)
        }}
    />
  )
}

export default ReactDatePicker
