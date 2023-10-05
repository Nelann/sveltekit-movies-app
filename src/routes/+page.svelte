<script>
	import MovieList from '../lib/components/MovieList.svelte';

	export let data;

	$: popularMovies = data?.popularMovies;

	let title = '';
</script>

<section class="mx-4 sm:mx-auto max-w-[1300px]">
	<div class="w-full my-8">
		<form class="join w-full" action="/search">
			<input
				class="input input-bordered join-item w-full"
				placeholder="Search movie here..."
				name="title"
				bind:value={title}
			/>
			<button class="btn join-item rounded-r-md" type="submit">Search Movie</button>
		</form>
	</div>
	<MovieList movies={popularMovies} />
</section>
