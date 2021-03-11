import { useState } from 'react';

function useInputForm(initialVal) {
	const [ value, setState ] = useState(initialVal);

	const handleChange = (e) => {
		setState(e.target.value);
	};

	const reset = () => {
		setState('');
	};

	return [ value, handleChange, reset ];
}

export default useInputForm;
