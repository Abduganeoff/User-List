import React from 'react';
import User from './User';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

function UserList() {
	const styles = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		background: '#75cfb8'
	};
	return (
		<div>
			<AppBar>
				<Toolbar style={styles}>
					<Typography>Contacts</Typography>
				</Toolbar>
			</AppBar>
			<Paper style={{ marginTop: '5em' }}>
				<User />
			</Paper>
		</div>
	);
}

export default UserList;
