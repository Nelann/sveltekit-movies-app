/** @type {import('./$types').PageServerLoad} */
export async function load({ url, fetch }) {
	const title = url.searchParams.get('title');

	const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;
	const getSearchMovies = async (movieTitle) => {
		const res = await fetch(
			`https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=en-US&page=1`,
			{
				headers: {
					Authorization: `Bearer ${AUTH_TOKEN}`
				}
			}
		);

		const data = await res.json();
		return data?.results;
	};

	return {
		searchMovies: await getSearchMovies(title)
	};
}
