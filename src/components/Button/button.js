import React from "react";
import "../App/App.css";

function Button({ handleClick, text }) {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
}

export default Button;

// {
//   /* <button
//         onClick={() => {
//           decrementClick();
//         }}
//       >
//         ⬅
//       </button>
//       <button
//         onClick={() => {
//           handleClick();
//         }}
//       >
//         Random Pokemon
//       </button>
//       <button
//         onClick={() => {
//           incrementClick();
//         }}
//       >
//         ➡
//       </button> */
// }
