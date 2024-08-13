const DropDown = ({ name, content, setInput }) => {


    return (
         <select className={`dropdown-${name}`} name={name} id={name} onChange={(e) => setInput(e.target.value)}>
            {name === "state" 
                ? content.map((item, index) => <option key={index} value={item.abbreviation}>{item.name}</option>) 
                : content.map((item, index) => <option key={index}>{item}</option>)
            }
        </select>
    )
}

export default DropDown;