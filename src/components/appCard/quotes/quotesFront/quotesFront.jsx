import React from 'react';
import Styles from './quotesFront.module.scss';
// Images
import IMG_refresh from '../../../../assets/img/settings/refresh.svg';
import IMG_settings from '../../../../assets/img/settings/settings-widget.svg';

function QuotesHeader({ showSettings, update, setSettings }) {
  return (
    <div className={Styles.header}>
      <h2 className={Styles.title}>Цитаты</h2>
      <div className={Styles.menubar}>
        <button onClick={update} className={Styles.button} type="button">
          <img src={IMG_refresh} alt="Обновить цитату" />
        </button>
        <button onClick={showSettings} className={Styles.button} type="button">
          <img src={IMG_settings} alt="Настройки" />
        </button>
      </div>
    </div>
  );
}

function Quote({ showRandom }) {
  const quote = showRandom();
  return (
    <>
      <span className={Styles.text}>
        &quot;
        {quote.quote}
        &quot;
      </span>
      <span className={Styles.owner}>
        {quote.owner}
      </span>
    </>
  );
}

function QuotesFront({
  showSettings, showRandom, update, setSettings,
}) {
  return (
    <div className={Styles.wrapper}>
      <QuotesHeader setSettings={setSettings} showSettings={showSettings} update={update} />
      <Quote showRandom={showRandom} />
    </div>
  );
}

export default QuotesFront;
