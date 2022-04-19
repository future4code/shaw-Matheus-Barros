import React, {useState, useEffect} from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";

function App() {

  // Variável de estado que guarda uma lista de Pokémon.
  const [pokeList, setPokeList] = useState([])
  // Variável de estado que guarda o nome de um Pokémon.
  const [pokeName, setPokeName] = useState("")

  // Função que pega os 151 Pokémon da API.
  const getAllPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(response => {
      // Função que está setando na variável de estado (pokeList) os 151 Pokémon.
      setPokeList(response.data.results)
    })
    .catch(err => {console.log(err)} )
  }

  // Método que substitui o componentDidMount em componentes funcionais.
  // Ou seja, ela é ativada apenas uma vez, por isso o array de dependências vazio. 
  useEffect( () => {
    getAllPokemon()
  }, [])

  // Função para mudar o valor do nome do Pokémon a ser buscado.
  const onChangePokeName = (e) => {
    setPokeName(e.target.value)
  }

  // Map para habilitar todos os pokémon disponíveis como uma opção de escolha no seletor.
  const novaPokeList = pokeList.map(pokemon => {
    return(
      <option key={pokemon.name} value={pokemon.name}>
        {pokemon.name}
      </option>
    )
  })
  
  return(
    <div className="App">
      {/* Um seletor que contém uma função onChange para mudar o nome do Pokémon que o usuário deseja pesquisar, e começando com Nenhum filtro diante a <tag> option. */}
      <select onChange={onChangePokeName}>
        <option value={""}> Nenhum </option>
        {/* Função para renderizar os 151 Pokémon como opção. */}
        {novaPokeList}
      </select>
      
      {/* Expressão booleana que renderiza o componente PokeCard caso pokeName tenha algum valor que não seja vazio. */}
      {pokeName && <PokeCard pokemonName={pokeName} />}
    </div>
  )
}

export default App;