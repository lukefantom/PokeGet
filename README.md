# UseEffect Workshop.

We will be using our new found useEffect skills to make a random pokemon generator. We are going to make a component PokemonViewer, which will take in a prop of `id`. When the `id` prop changes, our component will perform an HTTP request to get the pokemon of that id, and then display the data

## Task 1:

In `App/index.js`, complete the TODOS so that when the button is clicked, the id changes to a random number between 1 and 151, and that id is handed down as a prop to `PokemonViewer`.

## Task 2:

In PokemonViewer, create a piece of state that will store a Pokemon.

Within a useEffect, fetch a Pokemon from `https://pokeapi.co/api/v2/pokemon/${id}` and store
the data in your piece of state. The useEffect should only re-run when the id changes.

## Task 3:

Display your data! You will find the name, as well as images within the response. Console.log is your friend!

## Bonus:

Make a starwars search!

Have a component that takes in a search and displays the array of results from sending a request to this api:
`https://swapi.dev/api/people?search={search}`
