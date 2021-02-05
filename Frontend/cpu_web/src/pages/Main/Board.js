import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
import SearchBar from 'material-ui-search-bar';
// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod) {
	return { id, date, name, shipTo, paymentMethod };
}

const rows = [
	createData(0, '1', '제목 테스트입니다', '유도진', '20200501', 312.44),
];

function preventDefault(event) {
	event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
	seeMore: {
		marginTop: theme.spacing(3),
	},
}));

export default function Orders() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<header>
				<Title>자유 게시판</Title>
				<div>
					<SearchBar />
					<Button variant='contained' color='primary'>
						글쓰기
					</Button>
				</div>
			</header>
			<Table size='small'>
				<TableHead>
					<TableRow>
						<TableCell>번호</TableCell>
						<TableCell>제목</TableCell>
						<TableCell>글쓴이</TableCell>
						<TableCell>작성일</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell>{row.date}</TableCell>
							<TableCell>{row.name}</TableCell>
							<TableCell>{row.shipTo}</TableCell>
							<TableCell>{row.paymentMethod}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<div className={classes.seeMore}>
				<Link color='primary' href='#' onClick={preventDefault}>
					See more orders
				</Link>
			</div>
		</React.Fragment>
	);
}
