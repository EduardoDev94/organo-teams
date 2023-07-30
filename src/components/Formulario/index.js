import './Formulario.css'
import CampoTexto from '../CampoTexto'
import DropdownList from '../DropdownList'
import Button from '../Button'
import { useState } from 'react'


const Formulario = (props) => {
    const times = [
        'Real Madrid', 'Barcelona', 'Bayern de Munique', 'Milan', 'Inter de Milão', 'Cruzeiro EC'
    ]
    const formSubmited = (event) => {
        event.preventDefault()
        props.aoJogadorCadastrado({
            nome: nome,
            position: position,
            imagem: imagem,
            time: time
        })
    }
    
    const [nome, setNome] = useState('')
    const [imagem, setImage] = useState('')
    const [position, setPosition] = useState('')
    const [time, setTime] = useState('')



    return (
        <section className='formulario'>
            <form onSubmit={formSubmited}>
                <h2> Preencha os dados para criar uma seleção das ligas</h2>
                <CampoTexto
                    aoAlterado={valor => setNome(valor)}
                    valor={nome}
                    label="Nome"
                    placeholder="Digite o nome do jogador:"
                />
                <CampoTexto
                    valor={position}
                    aoAlterado={valor => setPosition(valor) }
                    label="Posição"
                    placeholder="Digite a Posição do Jogador:" />
                <CampoTexto
                    label="Imagem"
                    valor={imagem}
                    aoAlterado={valor => setImage(valor) }
                    placeholder="Digite o endereço da imagem" />
                <DropdownList 
                   label="Time" 
                   itens={times} 
                   valor={time}
                   aoAlterado={valor =>setTime(valor)}
                   />   
                <Button>  Criar Card </Button>
            </form>
        </section>
    )
}
export default Formulario
