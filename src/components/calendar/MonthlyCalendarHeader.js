import React from 'react';
import PropTypes from 'prop-types';

function MonthlyCalendarHeader({ weekDays }) {
  return (
    <>
      {weekDays.map((weekDay, i) => (
        <span
          key={weekDay} 
          key={i}
        >
          { weekDay.narrow || <span style={{opacity: `0`}}>*</span> }
        </span>
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
