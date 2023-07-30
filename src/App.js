import Banner from './components/Banner';
import Formulario from './components/Formulario';
import { useState } from 'react';


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
    </div>
  );
}

export default App;
