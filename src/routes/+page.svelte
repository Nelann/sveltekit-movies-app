<script>
	export let data;

	$: popularMovies = data?.popularMovies;
</script>

<section class="my-10 mx-4 sm:mx-auto max-w-[1300px]">
	<div class="flex flex-wrap justify-center gap-4">
		{#each popularMovies as movie}
			<div class="card w-96 bg-base-100 shadow-xl">
				<figure>
					<img
						src="https://image.tmdb.org/t/p/original/{movie?.poster_path ?? movie?.backdrop_path}"
						alt="Movie"
					/>
				</figure>
				<a href="/movie/{movie?.id}" data-sveltekit-preload-code>
					<div class="card-body">
						<h2 class="card-title hover:text-blue-500">{movie?.title}</h2>
						<p class="text-justify">{movie?.overview}</p>
					</div>
				</a>
			</div>
		{/each}
	</div>
</section>
