
import {writable} from "svelte/store"

export const pokestore = writable([]);
const fetchPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
    const res = await fetch(url);
    const data = await res.json();
    const loadedPokemon = data.results.map((pokemon, index)=> {
        const name = pokemon.name;
        const url = pokemon.url;
        const number = index + 1;
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;
        return { name, url, image, number };
    });
    pokestore.set(loadedPokemon)
}

fetchPokemon()