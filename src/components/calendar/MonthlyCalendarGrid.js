import React from 'react';
import PropTypes from 'prop-types';
import { DatePropType } from '../shared/prop-types/date';
import MonthlyCalendarDate from './MonthlyCalendarDate';
import * as s from './styleMonthCalendar';

function MonthlyCalendarGrid({ dates, setDate, dateT }) {
  function separar(base, maximo = 7) {
    var resultado = [[]];
    var grupo = 0;
    for (var indice = 0; indice < base.length; indice++) {
      if (resultado[grupo] === undefined) {
        resultado[grupo] = [];
      }
      resultado[grupo].push(base[indice]);
      if ((indice + 1) % maximo === 0) {
        grupo = grupo + 1;
      }
    }
    return resultado;
  }
  const datas = separar(dates);
  return (
    <>
      {datas.map((dates, index) => (
      <s.container.left.calendarContainer.calendar.container.grid.row
      key={index}
      >
        { dates.map((date, indice) => ( 
          <MonthlyCalendarDate
          dateT={dateT}
          setDate={setDate}
          atual={new Date().getUTCDate() < parseInt(date.text)}
          key={date.key} date={date} />
        ))}
      </s.container.left.calendarContainer.calendar.container.grid.row>
      ))}
    </>
  );
}

MonthlyCalendarGrid.propTypes = {
  setDate: PropTypes.func.isRequired,
  dateT: PropTypes.string.isRequired,
  dates: PropTypes.arrayOf(DatePropType.isRequired).isRequired,
};

export default MonthlyCalendarGrid;
