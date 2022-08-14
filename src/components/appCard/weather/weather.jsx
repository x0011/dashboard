import React from 'react';
import Styles from './weather.module.scss';
import Spinner from '../../spinner/spinner';
// assets
import cloudyIcon from '../../../assets/img/weather/cloudy.svg';
import windIcon from '../../../assets/img/weather/wind.svg';
import pressureIcon from '../../../assets/img/weather/pressure.svg';
import humidityIcon from '../../../assets/img/weather/humidity.svg';
import WeatherService from '../../../services/weatherService';
import AppCard from '../appCard';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      weatherInfo: {
        degrees: null,
        condition: null,
        wind: null,
        pressure: null,
        humidity: null,
      },
      loaded: false,
    };
    this.updateWeather();
  }

  updateWeather() {
    const service = new WeatherService();
    const data = service.check('samara');
    data.then((result) => {
      const {
        // eslint-disable-next-line camelcase
        temp_c, humidity, wind_kph, condition: { text }, pressure_mb,
      } = result.current;
      this.setState({
        // eslint-disable-next-line react/no-unused-state
        weatherInfo: {
          degrees: Math.round(temp_c),
          condition: text,
          wind: service.toMetersPerSecond(wind_kph),
          pressure: service.toMmHg(pressure_mb),
          humidity,
        },
        loaded: true,
      });
    });
  }

  render() {
    const { loaded, weatherInfo } = this.state;
    const { night } = this.props;
    return (
      loaded ? <AppCard front={<Content data={weatherInfo} />} /> : <Spinner />
    );
  }
}

function Content({ data }) {
  const {
    degrees, humidity, wind, pressure, condition,
  } = data;
  return (
    <>
      <img className={Styles.icon} src={cloudyIcon} alt={condition} />
      <div className={Styles.degreesWrapper}>
        <div className={Styles.degrees}>
          {degrees}
          &deg;
        </div>
        <div className={Styles.condition}>{condition}</div>
      </div>
      <div className={Styles.info}>
        <div className="infoItem">
          <img className={Styles.infoItemIcon} src={windIcon} alt="" />
          <div className={Styles.infoItemValue}>{wind}</div>
        </div>
        <div className="infoItem">
          <img className={Styles.infoItemIcon} src={humidityIcon} alt="" />
          <div className={Styles.infoItemValue}>
            {humidity}
            %
          </div>
        </div>
        <div className="infoItem">
          <img className={Styles.infoItemIcon} src={pressureIcon} alt="" />
          <div className={Styles.infoItemValue}>
            {pressure}
            {' '}
            мм
          </div>
        </div>
      </div>
    </>
  );
}
