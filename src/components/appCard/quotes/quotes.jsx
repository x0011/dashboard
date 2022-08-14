import React from 'react';
import AppCard from '../appCard';
import Styles from './quotes.module.scss';
// Images
import IMG_refresh from '../../../assets/img/settings/refresh.svg';
import IMG_settings from '../../../assets/img/settings/settings-widget.svg';

async function getData() {
  const req = JSON.stringify({
    query: `
          {
              getAllQuotes{
                  quote
              }
          }
      `,
    variables: {
    },
  });

  const response = await fetch('http://194.58.98.84/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    mode: 'no-cors',
    body: req,
  });

  return response.json();
}

function QuoteHeader({ showSettings }) {
  return (
    <div className={Styles.header}>
      <h2 className={Styles.title}>Цитаты</h2>
      <div className={Styles.menubar}>
        <button className={Styles.button} type="button">
          <img src={IMG_refresh} alt="Обновить цитату" />
        </button>
        <button onClick={showSettings} className={Styles.button} type="button">
          <img src={IMG_settings} alt="Настройки" />
        </button>
      </div>
    </div>
  );
}

function Quote() {
  return (
    <>
      <span className={Styles.text}>
        « Использовать Docker — всё равно, что стрелять из пушки по воробьям! »
      </span>
      <span className={Styles.owner}>
        Александр Утегенов
      </span>
    </>
  );
}

function QuoteFront({ showSettings }) {
  return (
    <div className={Styles.wrapper}>
      <QuoteHeader showSettings={showSettings} />
      <Quote />
    </div>
  );
}

export default class Quotes extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      showSettings: false,
    };
  }

  componentDidMount() {
    getData().then((data) => {
      this.setState({
        data,
      });
    });
  }

  showSettings = () => {
    const { showSettings } = this.state;
    this.setState({
      showSettings: !showSettings,
    });
  };

  render() {
    const { showSettings } = this.state;
    return (
      <AppCard
        front={<QuoteFront showSettings={this.showSettings} />}
        back={(<button type="button" onClick={this.showSettings}>Бекенд</button>)}
        showSettings={showSettings}
      />
    );
  }
}
