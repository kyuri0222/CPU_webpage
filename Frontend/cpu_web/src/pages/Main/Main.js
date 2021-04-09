import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Calendar from './Calendar';
import NoticeThumnail from './NoticeThumnail';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

export default function Main() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Calendar></Calendar>
				</Grid>
				<Grid item xs={6}>
					<NoticeThumnail></NoticeThumnail>
				</Grid>
				<Grid item xs={6}>
					<NoticeThumnail></NoticeThumnail>
				</Grid>
			</Grid>
		</div>
	);
}
