<script>
	import MovieList from '../../lib/components/MovieList.svelte';
	import { page } from '$app/stores';

	export let data;

	const url = $page.url;
	$: title = url.searchParams.get('title');
	$: movies = data?.searchMovies;
</script>

<svelte:head>
	<title>Sveltekit Movies App | Search</title>
</svelte:head>

<section class="my-10 mx-4 sm:mx-auto max-w-[1300px]">
	<div class="my-8">
		<p class="font-semibold">
			Search Movie by title <span class="bg-blue-500 rounded-md italic px-2 py-1">"{title}"</span>
		</p>
	</div>
	<MovieList {movies} />
</section>
