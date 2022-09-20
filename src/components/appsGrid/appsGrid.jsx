import React from 'react';
import Container from '../container/container';
import Styles from './appsGrid.module.scss';
import Weather from '../appCard/weather/weather';
import Todo from '../appCard/todo/todo';
import Quotes from '../appCard/quotes/quotes';

export default class AppsGrid extends React.Component {
  // eslint-disable-next-line react/no-unused-class-component-methods
  apps = {
    weather: <Weather />,
  };

  render() {
    return (
      <Container className={Styles.cont}>
        <div className={Styles.wrapper}>
          <Weather />
          <Todo />
          <Quotes />
        </div>
      </Container>
    );
  }
}
