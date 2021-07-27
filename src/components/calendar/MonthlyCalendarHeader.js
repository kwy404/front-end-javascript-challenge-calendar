import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';

function MonthlyCalendarHeader({ weekDays }) {
  return (
    <>
      {weekDays.map((weekDay, i) => (
        <Tooltip 
        placement="top"
        title={weekDay.long}>
        <span
          key={weekDay} 
          key={i}
        >
       
          { weekDay.narrow || <span style={{opacity: `0`}}>*</span> }
        </span>
        </Tooltip>
      ))}
    </>
  );
}

MonthlyCalendarHeader.propTypes = {
  weekDays: PropTypes.arrayOf(
    PropTypes.shape({
      long: PropTypes.string.isRequired,
      short: PropTypes.string.isRequired,
      narrow: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MonthlyCalendarHeader;
