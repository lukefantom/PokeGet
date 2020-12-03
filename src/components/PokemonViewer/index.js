import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../App/App.css";
import AbilitiesList from "../AbilitiesList";
import { getPokeHex } from "../../helper";

function PokemonViewer({ id }) {
  const [pokemon, setPokemon] = useState({});
  const [color, setColor] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getPokemon() {
      setIsLoading(true);
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      const newPokemon = {
        name: data.name,
        img: data.sprites.other.dream_world.front_default,
        abilities: data.abilities,
        experience: data.base_experience,
        type: `${data.types[0].type.name
          .charAt(0)
          .toUpperCase()}${data.types[0].type.name.slice(1)}`,
      };

      setColor(getPokeHex(newPokemon.type));

      console.log(data);
      console.log(newPokemon);
      setPokemon(newPokemon);
      console.log(newPokemon.type);
    }

    getPokemon();
  }, [id]);

  // TODO: send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
  // HINT: you will need useState and useEffect!
  return (
    <div className="pokemon-viewer" style={{ backgroundColor: color }}>
      {isLoading && (
        <div className="loading">
          <div class="sk-bounce">
            <div class="sk-bounce-dot"></div>
            <div class="sk-bounce-dot"></div>
          </div>
        </div>
      )}
      {pokemon && (
        <div>
          <div class="poke-type">
            <span>No. {id}</span>
            <span>HP: {pokemon.experience}</span>
            <span>Type: {pokemon.type}</span>
          </div>
          <h1 className="name">{pokemon.name}</h1>
          <div className="image">
            <img
              onLoad={() => setIsLoading(false)}
              src={pokemon.img}
              alt={`a pokemon called ${pokemon.name}`}
            ></img>
          </div>
          {pokemon.abilities && <AbilitiesList pokemon={pokemon} />}
        </div>
      )}
    </div>
  );
}

PokemonViewer.propTypes = {
  id: PropTypes.number.isRequired,
};

export default PokemonViewer;
