import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWeekdaysDescriptions } from '../../helpers/calendar';
import MonthlyCalendarHeader from './MonthlyCalendarHeader';
import MonthlyCalendarGrid from './MonthlyCalendarGrid';
import { getMonthlyCalendarGrid } from '../../selectors/ui/calendar';
import { getDisplayMonthAndYear } from '../../selectors/ui/month';
import { DatePropType, DateReminderPropType } from '../shared/prop-types/date';
import { getFormattedDateReminders } from '../../selectors/ui/calendar';
import { TaskModal } from "../task"
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { colors } from "./colorsTask";
import { hoursT } from "./hoursTask";
import Tooltip from '@material-ui/core/Tooltip';
import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';

import * as s from './styleMonthCalendar';

// As the user can't change the locale, keep this 'cached'.
const weekDays = getWeekdaysDescriptions();

function MonthlyCalendar({ dates, month, reminders, editReminder, newReminder }) {
  document.addEventListener('contextmenu', event => event.preventDefault());
  const localS = window.localStorage.getItem(`tasks`) ? JSON.parse(window.localStorage.getItem(`tasks`)) : [];
  const arrayDate = new Date().toLocaleDateString().split("/")
  const dateB = new Date();
  const horasA = dateB.getHours();
  const [dateT, setDate] = useState(`${arrayDate[2]}-${arrayDate[1]}-${arrayDate[0]}`);
  const [tasks, setTask] = useState(localS || [])
  const [hoursI, setHoursI] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [editT, setEditTask] = useState({})
  const [ menuItem, setMenuItem ] = useState({})
  const editTask = (taskA) => {
    const taskAtual = tasks.find(task => task.dateT == taskA.dateT && task.index == taskA.index);
    if(taskAtual){
      setOpenModal(true);
      setEditTask(taskAtual)
    }
  }
  const editTaskModal = (taskA, title) => {
    const old = tasks
    const taskAtual = old.find(task => task.dateT == taskA.dateT && task.index == taskA.index);
    if(taskAtual){
      const index = old.indexOf(taskAtual);
      title.trim().length == 0 ? title = `(Sem titulo)` : title = title
      old[index].title = title
      setTask([])
      setTimeout(() => {
        setTask(old)
      }, 1);
    }
  }
  useEffect(() => {
    saveLocalStorage()
  })
  const newTask = ({index, title = `(Sem titulo)`}) => {
    setHoursI(index)
    const taskA = {
      dateT,
      title, 
      backgroundColor: "#3f51b5",
      index: index
    }
    const found = tasks.find(task => task.dateT == taskA.dateT && task.index == taskA.index);
    if(!found){
      const oldTask = tasks;
      oldTask.push(taskA);
      editTask(taskA);
      setTask(oldTask);
      saveLocalStorage()
    }
  }
  const openTaskMenu = (e, taskA) => {
    e.preventDefault();
    if(e){
      let obj = {x: e.clientX, y: e.clientY, task: taskA, down: (window.screen.availHeight - (e.clientY + 319)) <= 0}
      setMenuItem(obj)
    }
  }
  const saveLocalStorage = () => {
    setTimeout(() => {
      const localStorage = window.localStorage.getItem(`tasks`)
      if(localStorage){
        const taskB = JSON.stringify(tasks)
        window.localStorage.setItem(`tasks`, taskB)
      } else{
        const taskB = JSON.stringify(`[]`)
        window.localStorage.setItem(`tasks`, taskB)
      }
    }, 200);
  }
  function parseTime(time) {    
    let timeInt = parseInt(time);
    let minutes = time.substring(3,5);

    // you could then add or subtract time here as needed

    if(time > '12:00') {
         return `${timeInt}:${minutes}pm`;
    } else {
         return `${timeInt}:${minutes}am`;
    }
}
  return (
    <s.container>
      <s.container.left>
        <s.container.left.filled />
        <s.container.left.calendarContainer>
          <s.container.left.calendarContainer.calendar>
            <s.container.left.buttonAdd>
              <svg width="36" height="36" viewBox="0 0 36 36">
                <path fill="#34A853" d="M16 16v14h4V20z"></path>
                <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
                <path fill="#FBBC05" d="M6 16v4h10l4-4z">
                </path><path fill="#EA4335" d="M20 16V6h-4v14z"></path><path fill="none" d="M0 0h36v36H0z"></path
                >
              </svg>
              <span>
                Criar
              </span>
            </s.container.left.buttonAdd>
            <s.container.left.calendarContainer.calendar.container >
              <s.container.left.calendarContainer.calendar.container.header>
                <span>
                  { month }
                </span>
              </s.container.left.calendarContainer.calendar.container.header>
              <s.container.left.calendarContainer.calendar.container.grid>
                <s.container.left.calendarContainer.calendar.container.grid.row>
                  <MonthlyCalendarHeader weekDays={weekDays} />
                </s.container.left.calendarContainer.calendar.container.grid.row>
                <MonthlyCalendarGrid 
                setDate={setDate}
                dateT={dateT}
                dates={dates} />
              </s.container.left.calendarContainer.calendar.container.grid>
            </s.container.left.calendarContainer.calendar.container>
          </s.container.left.calendarContainer.calendar>
        </s.container.left.calendarContainer>
      </s.container.left>
      <s.container.center>
        <s.container.center.main>
          <s.container.center.main.grid>
            <s.container.center.main.grid.header>
              <s.container.center.main.grid.header.time>
                <s.container.center.main.grid.header.time.flex >
                  <s.time>
                    <div className="time">
                    GMT-03
                    </div>
                    <s.time.times>
                      <s.time.times.time style={{
                        opacity: `0`
                      }}>
                        <span>
                        GMT-03
                        </span>
                      </s.time.times.time>
                      { hoursT.map((item, index) => (
                      <s.time.times.time>
                        <span>
                        { parseTime(item)}
                        </span>
                      </s.time.times.time>
                      ))}
                    </s.time.times>
                  </s.time>
                  <s.presentati>
                   { [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map((i, index) => (
                      <s.presentati.row
                      style={{
                        marginTop: `${index * 48}px`
                      }}
                      key={i}
                      >
                        { horasA == i &&
                          <div className="hoursA" />
                        }
                        <div
                        style={{
                          cursor: `pointer`
                        }} 
                        onClick={() => newTask({index})}
                        className="cell"/>
                        { tasks.map((task, indexT) => (
                        task.index === index && task.dateT === dateT &&
                        <s.tarefa
                        style={{
                          backgroundColor: task.backgroundColor
                        }}
                        onAuxClickCapture={(e) => openTaskMenu(e, task)}
                        key={indexT}
                        >
                          <span>
                            {task.title}
                          </span>
                          <p>
                            { parseTime(hoursT[task.index])} até {parseTime(hoursT[task.index + 1])}
                          </p>
                        </s.tarefa>
                        ))}
                      </s.presentati.row>
                   ))}
                  </s.presentati>
                </s.container.center.main.grid.header.time.flex>
              </s.container.center.main.grid.header.time>
            </s.container.center.main.grid.header>
            <s.presentation.grid>
                    <s.presentation>
                      <s.presentation.row>
                        <s.presentation.row.presentation.none />
                        <s.presentation.row.presentation.date>
                          <s.presentation.row.presentation.date.data>
                            <div 
                            style={{opacity: 0}}
                            className="dayT">
                              aaa.
                            </div>
                            <div className="day">
                              { dateT.split("-")[2] }
                            </div>
                          </s.presentation.row.presentation.date.data>
                        </s.presentation.row.presentation.date>
                      </s.presentation.row>
                    </s.presentation>
                  </s.presentation.grid>
          </s.container.center.main.grid>
        </s.container.center.main>
      </s.container.center>
      { menuItem.task !== undefined &&
        <s.Opacity onClick={() => setMenuItem({})}>
          <s.menuItem
          style={{
            top: `${menuItem.y}px`,
            left: `${menuItem.x}px`,
            marginTop: `${(menuItem.down ? `-175px`: `0px`)}`
          }}
          >
          <Button 
          onClick={() => {
            const found = tasks.find(task => task.index === menuItem.task.index &&
            task.dateT === menuItem.task.dateT);
            if(found){
              const id = tasks.indexOf(found);
              const old = tasks;
              old.splice(id, 1);
              setTask(old)
              setMenuItem({})
              saveLocalStorage()
            }
          }}
          style={{
            position: `relative`,
            width: `100%`,
            color: "#888888",
            textAlign: `left`
          }}
          startIcon={<DeleteIcon />}
        >
          Excluir
        </Button>
        <Button 
          onClick={() => editTask(menuItem.task)}
          style={{
            position: `relative`,
            width: `100%`,
            color: "#888888",
            textAlign: `left`
          }}
          startIcon={<EditIcon />}
        >
          Editar
        </Button>
        <hr/>
        <br/>
        { colors.map((item, i) => (
        <Tooltip 
        placement="top"
        title={item.n}>
        <div 
        onClick={() => {
          const old = tasks
        const taskAtual = old.find(task => task.dateT == menuItem.task.dateT && task.index == menuItem.task.index);
        if(taskAtual){
          const index = old.indexOf(taskAtual);
          old[index].backgroundColor = item.c
          setTask([])
          setTimeout(() => {
            setTask(old)
            saveLocalStorage()
          }, 1);
        }
        }}
        style={{
          backgroundColor: item.c
        }}
        className="color">
          {
          item.c === menuItem.task.backgroundColor &&
          <CheckIcon
          style={{
            position: `absolute`,
            color: `white`,
            width: `14px`,
            left: `2px`,
            marginTop: `-2px`
          }
          }
          />
          }
        </div>
        </Tooltip>
        ))}
        </s.menuItem>
        </s.Opacity>
      }
      { openModal &&

        <TaskModal
        task={editT}
        editTaskModal={editTaskModal}
        open={openModal}
        setOpenModal={setOpenModal}
        />
        
      }
    </s.container>
  );
}


MonthlyCalendar.propTypes = {
  date: DatePropType.isRequired,
  reminders: PropTypes.arrayOf(DateReminderPropType.isRequired).isRequired,
};

function mapStateToProps(state, props, ownProps) {
  const dates = getMonthlyCalendarGrid(state);
  return {
    ...props,
    dates,
    month: getDisplayMonthAndYear(state),
    reminders: getFormattedDateReminders(state, { dateId: "" }),
  };
}

export default connect(
  mapStateToProps)(MonthlyCalendar);
