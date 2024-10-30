import { getSearchMovies } from '../../lib/api/movies';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	const title = url.searchParams.get('title') ?? '';
	const searchMovies = await getSearchMovies(title);

	return { searchMovies };
}
