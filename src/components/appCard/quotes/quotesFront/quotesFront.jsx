import React from 'react';
import Styles from './quotesFront.module.scss';
// Images
import IMG_refresh from '../../../../assets/img/settings/refresh.svg';
import IMG_settings from '../../../../assets/img/settings/settings-widget.svg';

function QuotesHeader({
  showSettings, update, setRandom, setSettings,
}) {
  return (
    <div className={Styles.header}>
      <h2 className={Styles.title}>Цитаты</h2>
      <div className={Styles.menubar}>
        <button onClick={setRandom} className={Styles.button} type="button">
          <img src={IMG_refresh} alt="Обновить цитату" />
        </button>
        <button onClick={showSettings} className={Styles.button} type="button">
          <img src={IMG_settings} alt="Настройки" />
        </button>
      </div>
    </div>
  );
}

function Quote({ currentQuote, data }) {
  const { owner: { name }, quotes } = data;
  return (
    <>
      <span className={Styles.text}>
        &quot;
        {data.quotes[currentQuote].quote}
        &quot;
      </span>
      <span className={Styles.owner}>
        {name}
      </span>
    </>
  );
}

function QuotesFront({
  showSettings, setRandom, currentQuote, data, update, setSettings,
}) {
  return (
    <div className={Styles.wrapper}>
      <QuotesHeader
        setSettings={setSettings}
        setRandom={setRandom}
        showSettings={showSettings}
        update={update}
      />
      <Quote currentQuote={currentQuote} data={data} />
    </div>
  );
}

export default QuotesFront;
