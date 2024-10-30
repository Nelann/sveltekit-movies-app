<script>
	import nofFoundImage from '../../../assets/Image-not-found.png';
	export let movie;
</script>

<div class="card w-96 bg-base-100 shadow-xl">
	{#if movie?.backdrop_path}
		<figure>
			<img src="https://image.tmdb.org/t/p/w500/{movie?.backdrop_path}" alt="Movie" />
		</figure>
	{:else if movie?.poster_path}
		<figure>
			<img src="https://image.tmdb.org/t/p/w500/{movie?.poster_path}" alt="Movie" />
		</figure>
	{:else}
		<figure>
			<img src={nofFoundImage} alt="Movie" />
		</figure>
	{/if}
	<a href="/movies/{movie?.id}" data-sveltekit-preload-code>
		<div class="card-body">
			<h2 class="card-title hover:text-blue-500">{movie?.title}</h2>
			<p class="text-left">⭐ {movie?.vote_average}</p>
			<p class="text-justify">{movie?.overview}</p>
		</div>
	</a>
</div>
