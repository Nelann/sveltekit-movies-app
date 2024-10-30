<script>
	import Youtube from 'svelte-youtube-embed';
	import { derived } from 'svelte/store';
	import nofFoundImage from '../../../assets/Image-not-found.png';

	let { data } = $props();

	const movie = $state(data?.movie);
	let genres = $derived(movie?.genres?.map((genre) => genre.name).join(', '));
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
		<div class="hero-overlay bg-opacity-60"></div>
		<div class="hero-content text-center text-neutral-content">
			<div class="max-w-full">
				<div class="card sm:card-side bg-base-100 shadow-xl mx-auto">
					{#if movie.backdrop_path}
						<figure>
							<img
								src="https://image.tmdb.org/t/p/original/{movie.backdrop_path}"
								alt={movie?.title}
								class="w-full h-full"
							/>
						</figure>
					{:else if movie.poster_path}
						<figure>
							<img
								src="https://image.tmdb.org/t/p/original/{movie.backdrop_path}"
								alt={movie?.title}
								class="w-full h-full"
							/>
						</figure>
					{:else}
						<figure>
							<img src={nofFoundImage} alt={movie?.title} class="w-full h-full" />
						</figure>
					{/if}
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
								<p class="text-center text-md">Not found tailer</p>
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
