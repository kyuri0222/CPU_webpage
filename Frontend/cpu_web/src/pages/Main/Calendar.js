import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
	Scheduler,
	MonthView,
	Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import appointmentsData from './appointments/Appointment';

export default class Calendar extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			data: appointmentsData,
			currentViewName: 'Month',
		};

		this.currentViewNameChange = (e) => {
			this.setState({ currentViewName: e.target.value });
		};
	}

	render() {
		const { data, currentViewName } = this.state;

		return (
			<React.Fragment>
				<Paper>
					<Scheduler data={data}>
						<ViewState
							defaultCurrentDate={new Date()}
							currentViewName={currentViewName}
						/>
						<MonthView />
						<Appointments />
					</Scheduler>
				</Paper>
			</React.Fragment>
		);
	}
}
