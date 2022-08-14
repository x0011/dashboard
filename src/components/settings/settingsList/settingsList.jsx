import React from 'react';
import Styles from './settingsList.module.scss';
// Images
// eslint-disable-next-line camelcase
import IMG_widgets from '../../../assets/img/settings/widgets.svg';
// eslint-disable-next-line camelcase
// eslint-disable-next-line camelcase
import IMG_weather from '../../../assets/img/settings/weather.svg';
// eslint-disable-next-line camelcase
import IMG_stonks from '../../../assets/img/settings/stonks.svg';
// eslint-disable-next-line camelcase
import IMG_settings from '../../../assets/img/settings/settings.svg';
// eslint-disable-next-line camelcase
import IMG_quotes from '../../../assets/img/settings/quotes.svg';
// eslint-disable-next-line camelcase
import IMG_todo from '../../../assets/img/settings/todo-list.svg';
// eslint-disable-next-line camelcase

export default class SettingsList extends React.Component {
  settings = [
    // eslint-disable-next-line camelcase
    { name: 'Виджеты', img: IMG_widgets },
    // eslint-disable-next-line camelcase
    { name: 'Погода', img: IMG_weather },
    // eslint-disable-next-line camelcase
    { name: 'Курс валют', img: IMG_stonks },
    // eslint-disable-next-line camelcase
    { name: 'Цитаты', img: IMG_quotes },
    // eslint-disable-next-line camelcase
    { name: 'Todo', img: IMG_todo },
    // eslint-disable-next-line camelcase
    { name: 'Основные', img: IMG_settings },
  ];

  createList() {
    return this.settings.map((item) => (
      <li className={Styles.item}>
        <img className={Styles.itemImg} src={item.img} alt="" />
        <span className={Styles.itemName}>{item.name}</span>
      </li>
    ));
  }

  render() {
    return (
      <ul className={Styles.wrapper}>
        {this.createList()}
      </ul>
    );
  }
}
