import { error } from '@sveltejs/kit';

const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

export const getDetailMovie = async (movieId) => {
	const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
		headers: {
			Authorization: `Bearer ${AUTH_TOKEN}`
		}
	});

	const data = await res.json();
	return data;
};

export const getTrailerMovies = async (movieId) => {
	const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, {
		headers: {
			Authorization: `Bearer ${AUTH_TOKEN}`
		}
	});

	const data = await res.json();
	return data?.results;
};

export const getSearchMovies = async (movieTitle) => {
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
