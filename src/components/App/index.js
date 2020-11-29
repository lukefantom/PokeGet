import React, { useState } from "react";
import "./App.css";
import "./spinkit.css";

import PokemonViewer from "../PokemonViewer";

function App() {
  const [id, setId] = useState(Math.floor(Math.random() * 151) + 1);
  console.log(id);

  function handleClick() {
    // TODO: Set id to be random number between 1 and 151
    const randomNumber = Math.floor(Math.random() * 151) + 1;
    setId(randomNumber);
  }
  function incrementClick() {
    const addNumber = id + 1;
    setId(addNumber);
  }
  function decrementClick() {
    const minusNumber = id - 1;
    setId(minusNumber);
  }

  return (
    <div className="App">
      <PokemonViewer id={id} />
      <button
        onClick={() => {
          decrementClick();
        }}
      >
        ⬅
      </button>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Get Random Pokemon
      </button>
      <button
        onClick={() => {
          incrementClick();
        }}
      >
        ➡
      </button>
      {/* <audio controls={true} autoplay={true}>
        <source
          src="../../../public/Pokémon Red Blue Yellow Music (GameBoy) - Opening Theme Song Extended.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio> */}
    </div>
  );
}

export default App;
