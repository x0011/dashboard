import React from 'react';
import Container from '../container/container';
import Styles from './dateView.module.scss';

export default class DateView extends React.Component {
  constructor(props) {
    super(props);
    const now = new Date();
    this.state = {
      date: {
        hours: now.getHours(),
        minutes: now.getMinutes(),
        day: this.getDay(now),
        dayNum: now.getDate(),
        seconds: now.getSeconds(),
        month: this.getMonth(now).toLowerCase(),
      },
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.updateState();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getMonth(date) {
    const months = [
      'Января',
      'Февраля',
      'Мара',
      'Апреля',
      'Мая',
      'Июня',
      'Июля',
      'Августа',
      'Сентября',
      'Октября',
      'Ноября',
      'Декабря',
    ];
    return months[date.getMonth()];
  }

  getHours(date) {
    const hours = date.getHours();
    return hours < 10 ? `0${hours}` : hours;
  }

  getMinutes(date) {
    const minutes = date.getMinutes();
    return minutes < 10 ? `0${minutes}` : minutes;
  }

  getDay(date) {
    const nameOfDays = [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
    ];
    return nameOfDays[date.getDay()];
  }

  updateState() {
    const now = new Date();
    this.setState({
      date: {
        hours: this.getHours(now),
        minutes: this.getMinutes(now),
        day: this.getDay(now),
        dayNum: now.getDate(),
        seconds: now.getSeconds(),
        month: this.getMonth(now).toLowerCase(),
      },
    });
  }

  render() {
    const {
      date: {
        minutes, hours, day, dayNum, month,
      },
    } = this.state;
    return (
      <Container>
        <div className={Styles.wrapper}>
          <h2 className={Styles.time}>
            {hours}
            :
            {minutes}
          </h2>
          <span className={Styles.dateInline}>
            {day}
            ,
            {' '}
            {dayNum}
            {' '}
            {month}
          </span>
        </div>
      </Container>
    );
  }
}
