import React from "react";
import PropTypes from "prop-types";
import "../App/App.css";

function AbilitiesList({ pokemon }) {
  return (
    <ul style={{ listStyleType: "none" }}>
      <div className="pokeList">
        {pokemon.abilities.map(({ ability }) => {
          const { name } = ability;
          return <li key={name}>{name}</li>;
        })}
      </div>
    </ul>
  );
}

AbilitiesList.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default AbilitiesList;
