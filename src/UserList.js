import React from 'react';
import User from './User';
import UserSearchForm from './UserSearchForm';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function UserList() {
	return (
		<Paper
			style={{
				padding: 0,
				margin: 0,
				height: '100vh',
				backgroundColor: '#fafafa'
			}}
			elevation={0}
		>
			<AppBar position="static">
				<Toolbar
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						background: '#75cfb8'
					}}
				>
					<Typography>Contacts</Typography>
				</Toolbar>
			</AppBar>
			<Grid
				container
				justify="center"
				style={{ marginTop: '1rem' }}
			>
				<Grid item xs={11} md={8} lg={4}>
					<UserSearchForm />
					<User />
				</Grid>
			</Grid>
		</Paper>
	);
}

export default UserList;
