import React from 'react';
import useInputForm from './hooks/useInputForm';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

function UserSearchForm() {
	const [ value, handleChange, reset ] = useInputForm('');
	return (
		<Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					console.log(value);
					reset();
				}}
			>
				<TextField
					value={value}
					onChange={handleChange}
					margin="normal"
					label="Find User..."
					fullWidth
				/>
			</form>
		</Paper>
	);
}

export default UserSearchForm;
