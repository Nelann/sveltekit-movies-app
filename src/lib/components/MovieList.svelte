<script>
	import MovieItem from './MovieItem.svelte';

	export let movies;
</script>

<div class="flex flex-wrap justify-center gap-4">
	{#each movies as movie}
		<MovieItem {movie} />
	{/each}
</div>
