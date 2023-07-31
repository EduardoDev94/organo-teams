import Banner from './components/Banner';
import Formulario from './components/Formulario';
import { useState } from 'react';
import Time from './components/Time';


function App() {
  const times = [
    {
      nome:'Real Madrid',
      primaryColor:'#FFFF00',
      secondColor:'#FFFFFF',
    },    
    {
      nome:'Barcelona',
      primaryColor:'#00008B',
      secondColor:'#8B0000',
    },
    {
      nome:'Bayern de Munique',
      primaryColor:'#FF0000',
      secondColor:'#FFFFFF',
    },
    {
      nome:'Milan',
      primaryColor:'#000000',
      secondColor:'#8B0000',
    },
    {
      nome:'Inter de Milão',
      primaryColor:'#000000',
      secondColor:'#00008B',
    },
    {
      nome:'Cruzeiro EC',
      primaryColor:'#0000FF',
      secondColor:'#FFFFFF',
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
      <Formulario times={times.map(time => time.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorCadastrado(jogador)}/>
     
      {times.map(time =><Time key={time.nome} nome={time.nome} primaryColor={time.primaryColor} secondColor={time.secondColor} />)}
    </div>
  );
}

export default App;
