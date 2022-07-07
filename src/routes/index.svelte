<script>
	    import {pokestore} from "../stores/pokestore.js"
    console.log('oi', $pokestore) //prefix with dollar sign in order to see data
</script>

<svelte:head>
    <title>Pokedex</title>
</svelte:head>

<h1> QuickDex</h1>
{#each $pokestore as pokemon }
    <p>{pokemon.name} <b>{pokemon.number}</b></p>
    <img src={pokemon.image} alt="pokemon"/> 
{/each}
<style>

</style>
