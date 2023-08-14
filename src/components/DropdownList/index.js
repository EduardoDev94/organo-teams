import './DropdownList.css'
const DropdownList = (props) =>{


    return (
        <div className='DropdownList'>
            <label> {props.label} </label>

            <select value={props.value}  onChange={event => props.aoAlterado(event.target.value)}>
                <option value=''></option>
                {props.itens.map (item => {
                     return <option key={item}> {item} </option>
                     })}
            </select>
        </div>
    )
}

export default DropdownList