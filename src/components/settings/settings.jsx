/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Styles from './settings.module.scss';
import AvatarIMG from '../../assets/img/settings/avatar.png';
import SettingsList from './settingsList/settingsList';

function Settings(props) {
  const history = useNavigate();
  return (
    <>
      <div className={Styles.wrapper}>
        <div className={Styles.leftCol}>
          <div className={Styles.avatar}>
            <img src={AvatarIMG} alt="" />
            <span className={Styles.myName}>Ярослав</span>
          </div>
        </div>
        <div className={Styles.rightCol}>
          <label className={Styles.label}>
            Имя:
            <input />
          </label>
          <br />
          <label className={Styles.label}>
            Аватар:
            <input type="file" />
          </label>
        </div>
      </div>
      <button type="button" onClick={() => history(-1)} className={Styles.goBack}>Вернуться назад</button>
    </>
  );
}

export default Settings;
