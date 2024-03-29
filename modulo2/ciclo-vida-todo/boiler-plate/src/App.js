import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  
  state = {
    tarefas: [
      {
        id: Date.now(), // Gera um id (numero unico) para a tarefa
	      texto: 'Atividade Labenu',
	      completa: false,
        adicionar: [], //array para as tarefas adicioandas
      }
    ],
    inputValue: '',
    filtro: ''
  }

  componentDidUpdate() {
  }

  componentDidMount() {
  }

  onChangeInput = (event) => {
    this.setState ({
      inputValue: event.target.value
    });
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(), // Gera um id (numero unico) para a tarefa.
	    texto: this.state.inputValue, // Tarefa que o usuario digitar.
	    completa: false // Começa com false pois as tarefas são novas, ou seja, não concluidas.
    }

    const novoArrayTarefas = [...this.state.tarefas, novaTarefa]

    this.setState ({tarefas: novoArrayTarefas})
    this.setState ({inputValue: ""})
  }

  selectTarefa = (id) => {
    const novoArrayTarefas = this.state.tarefas.map((item) => {

      if(id === item.id){
        const novoItem = {
          ...item, 
          completa: !item.completa
        }
        return novoItem
      }else{
        return item
      }
    })

    this.setState({ tarefas: novoArrayTarefas })
  }

  onChangeFilter = (event) => {
    this.setState ({
      filtro: event.target.value
    });
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>

        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
