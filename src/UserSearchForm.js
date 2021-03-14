import React from 'react';
import useInputForm from './hooks/useInputForm';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/UserSearchFormStyles';

function UserSearchForm({ classes }) {
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
				<SearchIcon className={classes.searchIcon} />
				<TextField
					className={classes.textField}
					value={value}
					onChange={handleChange}
					margin="normal"
					fullWidth
					InputProps={{ disableUnderline: true }}
				/>
			</form>
		</Paper>
	);
}

export default withStyles(styles)(UserSearchForm);
