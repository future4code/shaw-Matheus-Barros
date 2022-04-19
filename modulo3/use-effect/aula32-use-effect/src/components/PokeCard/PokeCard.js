import React, {useState, useEffect} from "react";
import axios from "axios";

function PokeCard(props) {
    // Variável de estado que guarda informações do Pokémon.
    const [pokemon, setPokemon] = useState({})

    // Função que pega informações do Pokémon na URL (pokemonName).
    const pegaPokemon = (pokemonName) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
            // Pega/Guarda as informações do Pokémon na variável de estado (pokemon).
            setPokemon(response.data)
        })
        .catch(err => {console.log(err)} )
    }

    // Método que roda após a montagem do componente.
        // 1º ele vai executar pegaPokemon, que é uma função que renderiza as informações do Pokémon.
        // 2º ele busca informações de outro Pokémon caso pokemonName tenha seu valor mudado para outro nome de outro Pokémon.
    useEffect( () => {
        pegaPokemon(props.pokemonName)
    }, [props.pokemonName])

    return (
      <div>
        <p><strong>Name:</strong> {pokemon.name}</p>
        <p><strong>Weight:</strong> {pokemon.weight} Kg</p>
        {pokemon.types && <p><strong>Type:</strong> {pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
}

export default PokeCard;
