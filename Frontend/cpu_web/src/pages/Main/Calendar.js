import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {
	ViewState,
	EditingState,
	IntegratedEditing,
} from '@devexpress/dx-react-scheduler';
import {
	Scheduler,
	MonthView,
	Appointments,
	AppointmentForm,
	AppointmentTooltip,
	ConfirmationDialog,
	Toolbar,
	DateNavigator,
	TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';
import appointmentsData from './appointments/Appointment';

export default class Calendar extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			data: appointmentsData,
			currentViewName: 'Month',
		};

		this.commitChanges = this.commitChanges.bind(this);

		this.currentViewNameChange = (e) => {
			this.setState({ currentViewName: e.target.value });
		};
	}

	commitChanges({ added, changed, deleted }) {
		this.setState((state) => {
			let { data } = state;
			if (added) {
				const startingAddedId =
					data.length > 0 ? data[data.length - 1].id + 1 : 0;
				data = [...data, { id: startingAddedId, ...added }];
			}
			if (changed) {
				data = data.map((appointment) =>
					changed[appointment.id]
						? { ...appointment, ...changed[appointment.id] }
						: appointment
				);
			}
			if (deleted !== undefined) {
				data = data.filter((appointment) => appointment.id !== deleted);
			}
			return { data };
		});
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
						<EditingState onCommitChanges={this.commitChanges} />
						<IntegratedEditing />
						<MonthView />
						<Toolbar />
						<DateNavigator />
						<TodayButton />
						<ConfirmationDialog />
						<Appointments />
						<AppointmentTooltip showOpenButton showDeleteButton />
						<AppointmentForm />
					</Scheduler>
					<Grid container justify={'center'} spacing={3}></Grid>
				</Paper>
			</React.Fragment>
		);
	}
}
