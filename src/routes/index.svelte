<script>
	import { pokestore } from '../stores/pokestore.js';
    import '../styles/style.scss';
    
	console.log($pokestore); //prefix with dollar sign in order to see data
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>
<section class="wrapper">
	<h1>QuickDex</h1>
	<div class="pokemon-wrapper">
		{#each $pokestore as pokemon}
			<h3>{pokemon.name} <b>{pokemon.number}</b></h3>
			<img src={pokemon.image} alt="pokemon" />
		{/each}
	</div>
</section>

