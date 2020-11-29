export const getPokeHex = (type) => {
  switch (type) {
    case "fire":
      return "#F08030";

    case "water":
      return "#6890F0";

    case "electric":
      return "#F8D030";

    case "grass":
      return "#78C850";

    case "ice":
      return "#98D8D8";

    case "poison":
      return "#A040A0";

    case "bug":
      return "#A8B820";

    case "rock":
      return "#B8A038";

    case "fighting":
      return "#FF501F";

    case "ghost":
      return "#705898";

    case "psychic":
      return "#F85888";

    case "dragon":
      return "#7038F8";
    default:
      return "#A8A878";
  }
};
