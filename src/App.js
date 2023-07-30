import Banner from './components/Banner';
import Formulario from './components/Formulario';
import { useState } from 'react';
import Time from './components/Time';


function App() {
const [jogadores, setJogadores] = useState([])
  const aoNovoJogadorCadastrado = (jogador) =>{
    console.log(jogador)
    setJogadores([...jogadores, jogador])
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario aoJogadorCadastrado={jogador => aoNovoJogadorCadastrado(jogador)}/>
      <Time nome="Real Madrid" />
      <Time nome="Barcelona" />
      <Time nome="Milan"/>
      <Time nome="Bayern de Munique"/>
      <Time nome="Inter de Milão" />
      <Time nome="Cruzeiro" />
    </div>
  );
}

export default App;
