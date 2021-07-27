import React, { Component } from 'react';
import { DateTime } from 'luxon';
import { connect } from 'react-redux';
import { setMonth } from '../actions/ui/month';
import { getMonth } from '../selectors/ui/month';
import Header from './Header';
import MonthlyCalendar from './calendar/MonthlyCalendar';
import ReminderContainer from './reminders/ReminderContainer';
import * as s from './style';

function setNavigationBarHeightCSSVariable() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

class App extends Component {
  componentDidMount() {
    window.addEventListener('resize', setNavigationBarHeightCSSVariable);

    if (this.props.month === null) {
      this.props.dispatch(setMonth(DateTime.local().toFormat('yyyy-MM')));
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', setNavigationBarHeightCSSVariable);
  }

  render() {
    return (
      <div>
        <s.mainApp>
          <s.mainApp.home>
            <s.mainApp.relative>
              <Header/>
              <MonthlyCalendar />
            </s.mainApp.relative>
          </s.mainApp.home>
        </s.mainApp>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    ...props,
    month: getMonth(state),
  };
}

export default connect(mapStateToProps)(App);
