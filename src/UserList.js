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
	const [ forSortUsers, setForSortUsers ] = useState([]);

	useEffect(() => {
		async function fetchUsers() {
			const response = await axios.get(
				'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json'
			);
			const updatedUsers = response.data.map((user) => ({
				...user,
				isChecked: false
			}));
			const sortedByFirstName = updatedUsers.sort((a, b) =>
				a.last_name.localeCompare(b.last_name)
			);
			setUsers(sortedByFirstName);
			setForSortUsers(sortedByFirstName);
		}
		fetchUsers();
	}, []);

	useEffect(
		() => {
			const filtered = users.filter((user) => user.isChecked === true);
			const print = filtered.reduce((acc, curr) => {
				return (acc += ' ' + curr.id);
			}, '');
			console.log(print);
		},
		[ users ]
	);

	const toggle = (id) => {
		const updatedUsers = users.map(
			(user) =>
				user.id === id ? { ...user, isChecked: !user.isChecked } : user
		);

		setUsers(updatedUsers);
		setForSortUsers(updatedUsers);
	};

	const searUserByFullName = (fullName) => {
		const splittedFullName = fullName.trim().split(' ');
		const [ name, surname ] = splittedFullName;
		if (splittedFullName.length === 2) {
			const updatedUsers = users.filter((user) => {
				return (
					user.first_name.toLowerCase() === name.toLowerCase() &&
					user.last_name.toLowerCase() === surname.toLowerCase()
				);
			});
			setForSortUsers(updatedUsers);
			return;
		}
		console.log('Invalid Input');
	};

	return (
		<Paper className={classes.root} elevation={0}>
			<AppBar position="static" className={classes.appBarContent}>
				<Toolbar>
					<Typography>Contacts</Typography>
				</Toolbar>
			</AppBar>
			<Grid container justify="center">
				<Grid item xs={12} md={12} lg={12}>
					<UserSearchForm search={searUserByFullName} />
					<User users={forSortUsers} toggle={toggle} />
				</Grid>
			</Grid>
		</Paper>
	);
}

export default withStyles(styles)(UserList);
