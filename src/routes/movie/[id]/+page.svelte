<script>
	import Youtube from 'svelte-youtube-embed';

	export let data;

	const movie = data?.movie;
	const trailerMovie = data?.trailerMovies.find((movie) => movie.type === 'Trailer');
	const genres = movie?.genres?.map((genre) => genre.name).join(', ');
</script>

<svelte:head>
	<title>Sveltekit Movies App | {movie?.title}</title>
</svelte:head>

<section>
	<div
		class="hero min-h-screen"
		style={`background-image: url(https://image.tmdb.org/t/p/original/${
			movie?.backdrop_path ?? movie?.poster_path
		});`}
	>
		<div class="hero-overlay bg-opacity-60" />
		<div class="hero-content text-center text-neutral-content">
			<div class="max-w-fullxl">
				<div class="card sm:card-side bg-base-100 shadow-xl">
					<figure>
						<img
							src="https://image.tmdb.org/t/p/original/{movie?.poster_path ?? movie?.backdrop_path}"
							alt={movie?.title}
							class="w-full h-full"
						/>
					</figure>
					<div class="card-body">
						<h2 class="card-title text-left">{movie?.title}</h2>
						<p class="text-left">{movie?.original_title}</p>
						<p class="text-left">⭐ {movie?.vote_average}</p>
						<p class="text-left italic">{genres}</p>
						<p class="text-left">{movie?.overview}</p>
						{#if data?.trailerMovies.length}
							<div class="carousel carousel-end rounded-box gap-2">
								{#each data?.trailerMovies.slice(0, 3) as trailerMovie}
									<div class="carousel-item w-full h-full md:w-1/2">
										<div class="w-full h-fit sm:h-full rounded-box">
											<Youtube id={trailerMovie.key} class="w-full h-full" />
										</div>
									</div>
								{/each}
							</div>
						{:else}
							<div>
								<p class="font-semibold text-center text-4xl">Not found tailer</p>
							</div>
						{/if}
						<div class="card-actions justify-end">
							<a class="btn btn-primary w-full" href="/">Back</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
