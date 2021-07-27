import styled from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newReminder } from '../actions/ui/reminder';
import { getDisplayMonthAndYear } from '../selectors/ui/month';
import { makeStyles } from '@material-ui/core/styles';
import * as s from './headerStyle';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Button from '@material-ui/core/Button';
const date = new Date()

const getDay = index => {
  const days = [
    { long: 'Domingo', narrow: 'D', short: 'Dom' },
    { long: 'Segunda-feira', narrow: 'S', short: 'Seg' },
    { long: 'Terça-feira', narrow: 'T', short: 'Ter' },
    { long: 'Quarta-feira', narrow: 'Q', short: 'Qua' },
    { long: 'Quinta-feira', narrow: 'Q', short: 'Qui' },
    { long: 'Sexta-feira', narrow: 'S', short: 'Sex' },
    { long: 'Sábado', narrow: 'S', short: 'Sáb' },
  ]
  return days[index].long
};

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function AppHeader({ month, newReminder }) {
  const classes = useStyles();
  return (
    <s.header>
      <s.header.center className="flex_1">
        <s.header.center.left className="flex_1">
          <Tooltip title="Menu principal">
            <IconButton aria-label="Gaveta principal" className={classes} size="large">
              <DehazeIcon/>
            </IconButton>
          </Tooltip>
          <s.header.center.left.logo>
            <span>Agenda</span>
          </s.header.center.left.logo>
          <s.header.center.date className="flex_1">
            <s.header.center.date.center className="flex_1">
              <s.header.center.date.center.flex className="flex_1">
                <s.header.center.date.center.flex.date className="flex_1">
                  <Tooltip title={`${getDay(date.getDay())}, ${date.getUTCDate()} ${month}`}>
                    <Button 
                    style={{
                      left: `70px`,
                      fontWeight: `500`,
                      textTransform: `none`
                    }}
                    variant="outlined" color="default">
                      Hoje
                    </Button>
                  </Tooltip>
                </s.header.center.date.center.flex.date>
              </s.header.center.date.center.flex>
            </s.header.center.date.center>
          </s.header.center.date>
        </s.header.center.left>
      </s.header.center>
    </s.header>
  );
}

function mapStateToProps(state) {
  return {
    month: getDisplayMonthAndYear(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ newReminder }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
