
import Select from 'react-select'

const DropDown = ({ name, content, setInput }) => {

    const options = name === "state" ? content.map((item) => ({ value: item.abbreviation, label: item.name })) 
                                        : content.map((item) => ({ value: item, label: item }));
    
    return (
        <Select
            theme={(theme) => ({
                ...theme,
                colors: {
                ...theme.colors,
                primary25: '#93ad18',
                primary: '#5a6f08',
                },
            })}
            className={`dropdown-${name}`} 
            onChange={(e) => setInput(e.value)}  
            options={options} 
            placeholder={options[0].label} 
            defaultValue={options[0].value} 
         />
    )
}

export default DropDown;