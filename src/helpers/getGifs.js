export const getGifs = async categoria => {
	const URL = `https://api.giphy.com/v1/gifs/search?api_key=Z1iPzmjeEwHHtTZNrLhqrPFYNOqibKbu&q=${categoria}&limit=10`;
	const response = await fetch(URL);
	const { data } = await response.json();

	const gifs = data.map(imagen => ({
		id: imagen.id,
		title: imagen.title,
		url: imagen.images.downsized_medium.url,
	}));

	return gifs;
};

