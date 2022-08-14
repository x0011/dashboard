import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './header.module.scss';

export default class Header extends React.Component {
  render() {
    return (
      <div className={Styles.wrapper}>
        <div className={Styles.owner}>Ярослав Пантелеев</div>
        <Link to="/settings/">Настройки</Link>
      </div>
    );
  }
}
