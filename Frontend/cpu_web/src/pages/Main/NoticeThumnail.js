import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
	table: {
		minWidth: 100,
	},
	cellContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		// borderBottomColor: 'rgb(224, 224, 224)',
		// borderBottomStyle: 'solid',
		borderBottom: '1px solid rgb(224, 224, 224)',
	},
});

function createData(id, title, date) {
	return { id, title, date };
}

const rows = [
	createData(1, '공지사항5', new Date('2021-04-09')),
	createData(2, '공지사항4', new Date('2021-04-05')),
	createData(3, '공지사항3', new Date('2021-04-03')),
	createData(4, '공지사항2', new Date('2021-04-01')),
	createData(5, '공지사항1', new Date('2021-03-29')),
];

export default function NoticeThumnail() {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label='simple table'>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.title}>
							<Link
								to={`/Announce/detail/${row.id}`}
								class={classes.cellContainer}
							>
								<TableCell style={{ borderBottom: 'None' }} scope='row'>
									{row.title}
								</TableCell>
								<TableCell
									style={{ borderBottom: 'None' }}
									align='right'
								>{`${row.date.getFullYear()}-${
									row.date.getMonth() + 1 > 9
										? row.date.getMonth() + 1
										: '0' + (row.date.getMonth() + 1)
								}-${
									row.date.getDay() > 9
										? row.date.getDay()
										: '0' + row.date.getDay()
								}`}</TableCell>
							</Link>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
