# PokéGet

Built during the React useEffect workshop at the School of Code

![homepage-1](https://github.com/lukefantom/PokeGet/blob/main/public/Screen%20Shot%202021-01-28%20at%2012.47.31.png)

## Our brief

"We will be using our new found useEffect skills to make a random pokemon generator. We are going to make a component PokemonViewer, which will take in a prop of `id`. When the `id` prop changes, our component will perform an HTTP request to get the pokemon of that id, and then display the data"

Within a useEffect, fetch a Pokemon from `https://pokeapi.co/api/v2/pokemon/${id}` and store
the data in your piece of state. The useEffect should only re-run when the id changes.

## Main Learning Points:
Implementing useEffect to fetch data from an API within React.
Using conditional rendering with a 'loading' state to show loading animation. 
Fetch request is dynamic - 'id' state sets a random number between 1-150 using Math.random initial load.
The 'id' state is then reset to a random number when 'Get Random Pokémon' button is pressed.
Arrow buttons increment and decrement 'id' state +-1.
Utilising the box model to build the Pokémon card graphics using CSS
Uses a switch statement to  set the state for the background color of the card dependent on the pokemon 'type'.

Built with:
HTML
CSS
JavaScript
React

## Go get that Pokémon!

![homepage-2](https://github.com/lukefantom/PokeGet/blob/main/public/Screen%20Shot%202021-01-28%20at%2012.47.43.png)
