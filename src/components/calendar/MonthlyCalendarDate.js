import React, { setState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DatePropType, DateReminderPropType } from '../shared/prop-types/date';
import { getFormattedDateReminders } from '../../selectors/ui/calendar';
import { editReminder, newReminder } from '../../actions/ui/reminder';
import MonthlyCalendarDateReminder from './MonthlyCalendarDateReminder';
import Tooltip from '@material-ui/core/Tooltip';

function MonthlyCalendarDate({ date, reminders, editReminder, newReminder, setDate, dateT }) {
  const diaAtual = new Date().getDate()
  const mesAtual = new Date().getMonth() + 1
  return (
    <Tooltip 
      placement="top"
      title={`${date.key.split("-")[2]}/${date.key.split("-")[1]}/${date.key.split("-")[0]}`}>
      <span
        style={{
          opacity: date.trailing
          || parseInt(date.key.split("-")[2]) < diaAtual && mesAtual >= parseInt(date.key.split("-")[1])
          ? `0.6` : `1`
        }}
        onClick={() => 
          {
            if(parseInt(date.key.split("-")[2]) < diaAtual && mesAtual >= parseInt(date.key.split("-")[1])){
              return
            }
            setDate(date.key)
          }}
        className={`${(dateT == date.key ? 'active' : '')}`}
        key={date.key}
      >
      <div className="hover">
        {date.text}
      </div>
    </span>
    </Tooltip>
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
