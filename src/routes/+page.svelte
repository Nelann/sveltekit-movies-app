<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import MovieList from '../lib/components/shared/movie-list.svelte';

	export let data;

	$: popularMovies = data?.popularMovies;

	let title = '';
	let query = new URLSearchParams($page?.url?.searchParams.toString());

	const handleSubmit = () => {
		if (title === '') return;

		query.set('title', title);

		goto(`/search?${query.toString()}`);
	};
</script>

<svelte:head>
	<title>Sveltekit Movies App | Home</title>
</svelte:head>

<section class="mx-4 sm:mx-auto max-w-[1300px]">
	<div class="w-full my-8">
		<form class="join w-full" on:submit|preventDefault={handleSubmit}>
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
