/** @type {import('./$types').PageServerLoad} */

import { getDetailMovie, getTrailerMovies } from '../../../lib/api/movies';

export async function load({ params }) {
	const [movie, trailerMovies] = await Promise.all([
		getDetailMovie(params.id),
		getTrailerMovies(params.id)
	]);

	return { movie, trailerMovies };
}
