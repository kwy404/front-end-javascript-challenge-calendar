import React, { setState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DatePropType, DateReminderPropType } from '../shared/prop-types/date';
import { getFormattedDateReminders } from '../../selectors/ui/calendar';
import { editReminder, newReminder } from '../../actions/ui/reminder';
import MonthlyCalendarDateReminder from './MonthlyCalendarDateReminder';

function MonthlyCalendarDate({ date, reminders, editReminder, newReminder, setDate, dateT }) {
  return (
      <span
        onClick={() => setDate(date.key)}
        className={`${(dateT == date.key ? 'active' : '')}`}
        key={date.key}
      >
      <div className="hover">
        {date.text}
      </div>

      {/* <ol>
        {reminders.map((reminder) => (
          <MonthlyCalendarDateReminder
            key={reminder.id}
            reminder={reminder}
            onClick={(e) => {
              e.stopPropagation();
              editReminder(reminder);
            }}
          />
        ))}
      </ol> */}
    </span>
  );
}

MonthlyCalendarDate.propTypes = {
  date: DatePropType.isRequired,
  dateT: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
  reminders: PropTypes.arrayOf(DateReminderPropType.isRequired).isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    reminders: getFormattedDateReminders(state, { dateId: ownProps.date.key }),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ editReminder, newReminder }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MonthlyCalendarDate);
