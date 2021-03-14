import React, { useEffect, useState } from 'react';
import User from './User';
import axios from 'axios';
import UserSearchForm from './UserSearchForm';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/UserListStyles';

function UserList(props) {
	const { classes } = props;
	const [ users, setUsers ] = useState([]);

	useEffect(() => {
		async function fetchUsers() {
			const response = await axios.get(
				'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json'
			);
			setUsers(response.data);
		}
		fetchUsers();
	}, []);

	return (
		<Paper className={classes.root} elevation={0}>
			<AppBar
				position="static"
				className={classes.appBarContent}
			>
				<Toolbar>
					<Typography>Contacts</Typography>
				</Toolbar>
			</AppBar>
			<Grid container justify="center">
				<Grid item xs={12} md={12} lg={12}>
					<UserSearchForm />
					<User users={users} />
				</Grid>
			</Grid>
		</Paper>
	);
}

export default withStyles(styles)(UserList);
