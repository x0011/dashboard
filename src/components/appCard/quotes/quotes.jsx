import React from 'react';
import AppCard from '../appCard';
import QuotesFront from './quotesFront/quotesFront';
import QuoteSettings from './quoteSettings/quotesSettings';
import Spinner from '../../spinner/spinner';
import LSSettings from '../../../services/LSSettings';

async function getData(ownerId) {
  const req = JSON.stringify({
    query: `query{getOwnerWithQuotes(owner_id: "${ownerId}"){owner{name}quotes{quote}}}`,
  });

  const response = await fetch('https://panteleev.su/graphql', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: req,
  });

  return response.json();
}

export default class Quotes extends React.Component {
  defaultSettings = {
    owner: 1,
    timer: false,
    allQuotes: false,
  };

  settingsLS = new LSSettings('quotes', this.defaultSettings);

  constructor() {
    super();
    this.state = {
      data: null,
      currentQuote: 0,
      allOwners: null,
      showSettings: false,
      status: false,
      timerId: false,
      settings: null,
    };
  }

  componentDidMount() {
    this.update();
  }

  componentWillUnmount() {
    // const { timerId } = this.state;
    // clearInterval(timerId);
  }

  async getSettings() {
    return this.settingsLS.getSettings();
  }

  async getAllOwners() {
    const query = JSON.stringify({
      query: '{getAllOwners{id name}}',
    });

    const result = await fetch('https://panteleev.su/graphql', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: query,
    });

    return result.json();
  }

  setSettings = (settings) => {
    this.settingsLS.set(settings);
    this.update();
  };

  setTimer = (value) => {
    // const { settings, timerId: currentTimer } = this.state;
    // if (settings !== null && settings.timer !== value) {
    //   const newTimerId = setInterval(() => {
    //     this.update();
    //   }, value * 1000);
    //   this.setState({ timerId: newTimerId });
    //   clearInterval(currentTimer);
    // } else if (settings === null) {
    //   const newTimerId = setInterval(() => {
    //     this.update();
    //   }, value * 1000);
    //   this.setState({ timerId: newTimerId });
    // } else if (value === 'false') {
    //   clearInterval(currentTimer);
    // }
  };

  setRandom = () => {
    const { data, data: { owner } } = this.state;
    const { length } = data.quotes;
    const randomQuote = Math.floor(Math.random() * (length - 0)) + 0;
    this.setState({
      currentQuote: randomQuote,
    });
  };

  showSettings = () => {
    const { showSettings } = this.state;
    this.setState({
      showSettings: !showSettings,
    });
  };

  update = () => {
    this.getSettings().then((settings) => {
      const { owner, timer } = settings;
      this.setTimer(timer);
      Promise.all([getData(owner), this.getAllOwners()]).then((value) => {
        const data = value[0].data.getOwnerWithQuotes;
        const allOwners = value[1].data.getAllOwners;
        this.setState({
          data,
          status: true,
          allOwners,
          settings,
        });
      });
    }).catch((err) => {
      console.log(err.message);
    });
  };

  render() {
    const {
      showSettings, data, currentQuote, status, settings, allOwners,
    } = this.state;
    // console.log(data);
    return (
      status
        ? (
          <AppCard
            front={(
              <QuotesFront
                update={this.update}
                setRandom={this.setRandom}
                showSettings={this.showSettings}
                setupOwner={this.setupOwner}
                setSettings={this.setSettings}
                currentQuote={currentQuote}
                data={data}
              />
            )}
            back={(
              <QuoteSettings
                showSettings={this.showSettings}
                setSettings={this.setSettings}
                settings={settings}
                allOwners={allOwners}
              />
            )}
            showSettings={showSettings}
          />
        )
        : <AppCard front={<Spinner />} />
    );
  }
}
