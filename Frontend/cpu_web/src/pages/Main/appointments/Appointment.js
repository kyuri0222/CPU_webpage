// db에서 appointments date 정보 불러와서 전달하
// const appointmentsData = [];
class appointmentDate {
	constructor(id, title, startDate, endDate = null) {
		this.id = id;
		this.title = title;
		this.startDate = new Date(startDate);
		if (!endDate) endDate = startDate;
		this.endDate = new Date(endDate);
	}
}
// 임시 데이터 생성
const testData = [
	new appointmentDate(
		'test0',
		'지난 달 테스트 일정',
		'2021-03-15',
		'2021-03-16'
	),
	new appointmentDate('test1', '1차 모의토익', '2021-04-02', '2021-04-03'),
	new appointmentDate('test2', '재수강 신청 기간', '2021-04-05', '2021-04-09'),
	new appointmentDate('test3', '4월 생일축하', '2021-04-05', '2021-04-09'),
	new appointmentDate('test4', '랜선 요리자랑', '2021-04-06', '2021-04-13'),
	new appointmentDate('test5', '중간고사 간식행사', '2021-04-12', '2021-04-14'),
	new appointmentDate('test6', '강의개선 설문조사', '2021-04-12', '2021-04-23'),
	new appointmentDate('test7', '중간고사', '2021-04-19', '2021-04-24'),
	new appointmentDate(
		'test8',
		'다음 달 테스트 일정1',
		'2021-05-07',
		'2021-05-14'
	),
	new appointmentDate('test9', '다음 달 테스트 일정2', '2021-05-09'),
];
// console.log(appointmentDate);
export default testData;
