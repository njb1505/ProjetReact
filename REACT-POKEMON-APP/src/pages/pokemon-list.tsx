import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';
import PokemonCard from '../components/pokemon-card';
  
const PokemonList: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  
  useEffect(() => {
    setPokemons(POKEMONS);
  }, []);
  
  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container"> 
        <div className="row"> 
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
        </div>
      </div>
    </div> 
  );
}
/**
 1. pokemon.list permet d'afficher la liste des Pokemon

 2.<PokemonCard key={pokemon.id} pokemon={pokemon}/>
 Explication de cette ligne:

 on utilise le composant PokemonCard en lui passant une prop {pokemon} du composant à afficher.   
 */
export default PokemonList;