/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

	const getDetailMovie = async (movieId) => {
		const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
			headers: {
				Authorization: `Bearer ${AUTH_TOKEN}`
			}
		});

		const data = await res.json();
		return data;
	};

	const getTrailerMovies = async (movieId) => {
		const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, {
			headers: {
				Authorization: `Bearer ${AUTH_TOKEN}`
			}
		});

		const data = await res.json();

		return data?.results;
	};

	return {
		movie: getDetailMovie(params.id),
		trailerMovies: getTrailerMovies(params.id)
	};
}
