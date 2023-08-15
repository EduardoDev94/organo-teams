import Jogador from '../Jogador'
import './Time.css'

const Time = (props) =>{
    const css = {backgroundColor: props.secondColor}
   
    return (
      (props.jogadores.length > 0) ?  <section className='time' style={css}>
            <h3 style={{backgroundColor: props.primaryColor}} >{props.nome}</h3>
           <div className='jogadores'>

            {props.jogadores.map(jogador => <Jogador corDeFund={props.primaryColor} nome={jogador.nome} position={jogador.position} key={jogador.nome} imagem={jogador.imagem} />) }
           </div>
        </section>
        : ''
    )
}

export default Time
