import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
	table: {
		minWidth: 100,
	},
});

function createData(title, date) {
	return { title, date };
}

const rows = [
	createData('공지사항5', new Date('2021-04-09')),
	createData('공지사항4', new Date('2021-04-05')),
	createData('공지사항3', new Date('2021-04-03')),
	createData('공지사항2', new Date('2021-04-01')),
	createData('공지사항1', new Date('2021-03-29')),
];

export default function NoticeThumnail() {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label='simple table'>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.title}>
							<TableCell component='th' scope='row'>
								{row.title}
							</TableCell>
							<TableCell align='right'>{`${row.date.getFullYear()}-${
								row.date.getMonth() + 1 > 9
									? row.date.getMonth() + 1
									: '0' + (row.date.getMonth() + 1)
							}-${
								row.date.getDay() > 9
									? row.date.getDay()
									: '0' + row.date.getDay()
							}`}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
