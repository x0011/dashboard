/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Styles from './quotesSettings.module.scss';

export default class QuotesSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  createOwners() {
    const { allOwners } = this.props;
    const list = allOwners.map((item) => (
      <option value={item.id} key={item.id}>{item.name}</option>
    ));
    return list;
  }

  changeSettings(event, targetSetting) {
    const { setSettings } = this.props;
    setSettings({
      [targetSetting]: event.target.value,
    });
  }

  check(event) {
    const { setSettings, settings } = this.props;
    setSettings({
      allQuotes: !settings.allQuotes,
    });
  }

  render() {
    const {
      showSettings, settings,
    } = this.props;
    const { checked } = this.state;
    return (
      <>
        <div className={Styles.header}>
          <div className={Styles.title}>Настройки</div>
          <button label="Закрыть" className={Styles.close} type="button" onClick={showSettings} />
        </div>
        <div className={Styles.wrapper}>
          <label className={Styles.label}>
            Выберите автора:
            <select value={settings.owner} onChange={(event) => this.changeSettings(event, 'owner')} className={Styles.selectOwner}>
              {this.createOwners()}
            </select>
          </label>
          {/* <label className={Styles.label}>
            Установить таймер:
            <select
              onChange={(event) => this.changeSettings(event, 'timer')}
              className={Styles.selectOwner}
            >
              <option value="false">Без таймера</option>
              <option value="5">5 сек</option>
              <option value="15">15 сек</option>
              <option value="60">1 мин</option>
            </select>
          </label> */}
        </div>
      </>
    );
  }
}
