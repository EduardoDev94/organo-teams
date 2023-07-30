import './CampoTexto.css'


const CampoTexto = (props) => {

    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto