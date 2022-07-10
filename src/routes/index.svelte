<script>
	import { pokestore } from '../stores/pokestore.js';
	import '../styles/style.scss';

	// console.log($pokestore); //prefix with dollar sign in order to see data
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>
<div class="main-wrapper">
	<h1>QuickDex</h1>
	<input type="text" placeholder="Search for a Pokemon" id="search" />
</div>
<div class="wrapper">
	{#each $pokestore as pokemon}
		<card class="pokemon-wrapper">
			<h3>{pokemon.name}</h3>
			<h2>{pokemon.number}</h2>
			<img src={pokemon.image} alt="pokemon" class="pokemon-image" />
		</card>
	{/each}
</div>
