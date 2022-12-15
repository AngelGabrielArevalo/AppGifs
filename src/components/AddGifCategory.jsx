import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddGifCategory = ({ placeholder, onNewCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const onInputChange = ({ target }) => {
		setInputValue(target.value);
	};

	const onSubmit = event => {
		event.preventDefault();
		if (inputValue.length < 3) return;
		onNewCategory(inputValue);
		setInputValue('');
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type='text'
				placeholder={placeholder}
				value={inputValue}
				onChange={onInputChange}
			/>
		</form>
	);
};

AddGifCategory.propTypes = {
	placeholder: PropTypes.string.isRequired,
};

AddGifCategory.defaultProps = {
	placeholder: 'Buscar Gifs...',
};
