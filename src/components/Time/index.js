import Jogador from '../Jogador'
import './Time.css'

const Time = (props) =>{
    const css = {backgroundColor: props.secondColor}
   
    return (
        <section className='time' style={css}>
            <h3 style={{borderColor:props.primaryColor}} >{props.nome}</h3>
           <div className='jogadores'>

            {props.jogadores.map(jogador => <Jogador nome={jogador.nome} position={jogador.position} imagem={jogador.imagem} />) }
           </div>
        </section>
    )
}

export default Time