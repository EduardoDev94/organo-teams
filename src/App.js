import Banner from './components/Banner';
import Formulario from './components/Formulario';
import { useState } from 'react';
import Time from './components/Time';


function App() {
  const times = [
    {
      nome:'Real Madrid',
      primaryColor:'#d9f7e9',
      secondColor:'#57c278',
    },    
    {
      nome:'Barcelona',
      primaryColor:'#d9f7e9',
      secondColor:'#57c278',
    },
    {
      nome:'Bayern de Munique',
      primaryColor:'#d9f7e9',
      secondColor:'#57c278',
    },
    {
      nome:'Milan',
      primaryColor:'#d9f7e9',
      secondColor:'#57c278',
    },
    {
      nome:'Inter de Milão',
      primaryColor:'#d9f7e9',
      secondColor:'#57c278',
    },
    {
      nome:'Cruzeiro EC',
      primaryColor:'#d9f7e9',
      secondColor:'#57c278',
    }
   ]


  const [jogadores, setJogadores] = useState([])
  const aoNovoJogadorCadastrado = (jogador) =>{
    console.log(jogador)
    setJogadores([...jogadores, jogador])
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario aoJogadorCadastrado={jogador => aoNovoJogadorCadastrado(jogador)}/>
      {times.map(time =><Time key={time.nome} nome={time.nome} primaryColor={time.primaryColor} secondColor={time.secondColor} />)}
    </div>
  );
}

export default App;
