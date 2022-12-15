import { useState } from 'react';
import { AddGifCategory, GifContainer } from './components';

export const GifApp = () => {
	const [categorias, setCategorias] = useState([]);

	const agragarCategoria = categoria => {
		if (categorias.includes(categoria)) return;
		setCategorias([categoria, ...categorias]);
	};

	const listarCategorias = () =>
		categorias.map(categoria => <GifContainer key={categoria} categoria={categoria} />);

	return (
		<>
			<h1>App para buscar Gifs</h1>
			<AddGifCategory onNewCategory={agragarCategoria} />
			<div>{listarCategorias()}</div>
		</>
	);
};
