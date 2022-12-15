import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifContainer = ({ categoria }) => {
	const { images, isLoading } = useFetchGifs(categoria);

	const listarGifs = images => images.map(image => <GifItem key={image.id} {...image} />);

	return (
		<div>
			<h3>{categoria}</h3>
			{isLoading && <h3>Cargando...</h3>}
			<div className='card-grid'>{listarGifs(images)}</div>
		</div>
	);
};
