import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Calendar from './Calendar';
import NoticeThumnail from './NoticeThumnail';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	CaleandarHeader: {
		backgroundColor: '#F8D67F',
		textAlign: 'center',
		borderRadius: '0.3em',
		position: 'relative',
		zIndex: 1,
		top: '0.2em',
		padding: '0.1em',
	},
	CaleandarContainer: {
		border: '0.2em solid #F8D67F',
		borderTop: '0',
		borderRadius: '0 0 0.5em 0.5em',
	},
	NoticeHeader: {
		justifyItems: 'center',
		backgroundColor: '#F8D67F',
		textAlign: 'center',
		borderRadius: '0.3em',
		position: 'relative',
		zIndex: 1,
		top: '1em',
		padding: '0.1em',
	},
	NoticeContainer: {
		paddingTop: '2em',
		border: '0.2em solid #F8D67F',
		borderRadius: '0 0 0.5em 0.5em',
	},
}));

export default function Main() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container justify={'center'} spacing={3}>
				<Grid item xs={10}>
					<Typography variant='h4' className={classes.CaleandarHeader}>
						일정
					</Typography>
					<Typography className={classes.CaleandarContainer}>
						<Calendar></Calendar>
					</Typography>
				</Grid>
				<Grid container item xs={6} justify='center'>
					<Grid item xs={6}>
						<Typography variant='h5' className={classes.NoticeHeader}>
							공지사항
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography className={classes.NoticeContainer}>
							<NoticeThumnail />
						</Typography>
					</Grid>
				</Grid>
				<Grid container item xs={6} justify='center'>
					<Grid item xs={6}>
						<Typography variant='h5' className={classes.NoticeHeader}>
							공지사항
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography className={classes.NoticeContainer}>
							<NoticeThumnail />
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
