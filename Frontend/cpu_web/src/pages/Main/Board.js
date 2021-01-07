import React from 'react';
import { Typography, Row, Col, Input, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const Board = ({ title }) => {
	const { Title } = Typography;
	const { Search } = Input;
	const onSearch = (event) => {};
	return (
		<>
			<header>
				<Row>
					<Col span={24}>
						<Title level={2}>
							<SmileOutlined />
							{`${title} 게시판`}
							<SmileOutlined />
						</Title>
					</Col>
				</Row>
				<Row>
					<Col span={12}>
						<Search
							placeholder='검색어를 입력해주세요.'
							onSearch={onSearch}
							enterButton
						/>
					</Col>
					<Col span={4} offset={8}>
						<Button size={'Large'}>글쓰기</Button>
					</Col>
				</Row>
			</header>
			<main>
				<section>
					<Row>
						<Col span={16}>제목</Col>
						<Col span={3}>글쓴이</Col>
						<Col span={5}>작성일</Col>
					</Row>
				</section>
				<section>
					<Row>
						<Col span={16}>제목테스트입니다.</Col>
						<Col span={3}>유도진</Col>
						<Col span={5}>2021.01.08</Col>
					</Row>
				</section>
			</main>
		</>
	);
};

export default Board;
