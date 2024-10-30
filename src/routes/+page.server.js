/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

	const getPopularMovies = async () => {
		const res = await fetch(`https://api.themoviedb.org/3/movie/popular`, {
			headers: {
				Authorization: `Bearer ${AUTH_TOKEN}`
			}
		});

		const data = await res.json();
		return data?.results;
	};

	return { popularMovies: await getPopularMovies() };
}
