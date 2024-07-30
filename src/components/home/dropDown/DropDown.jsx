const DropDown = ({ name, content }) => {


    return (
         <select name={name} id={name}>
            {name === "state" 
                ? content.map((item, index) => <option key={index} value={item.abbreviation}>{item.name}</option>) 
                : content.map((item, index) => <option key={index}>{item}</option>)
            }
        </select>
    )
}

export default DropDown;