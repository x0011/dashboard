import React from "react";
import Styles from './weather.module.scss';
import Spinner from "../../spinner/spinner";
// assets
import cloudyIcon from '../../../assets/img/weather/cloudy.svg';
import windIcon from '../../../assets/img/weather/wind.svg';
import pressureIcon from '../../../assets/img/weather/pressure.svg';
import humidityIcon from '../../../assets/img/weather/humidity.svg';
import WeatherService from "../../../services/weatherService";

export default class Weather extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            weatherInfo: {
                degrees: null,
                condition: null,
                wind: null,
                pressure: null,
                humidity: null
            },
            loaded: false
        }
        this.updateWeather();
    }

    updateWeather(){
        const service = new WeatherService();
        const data = service.check('samara')
        data.then(result => {
            console.log(result);
            const {temp_c, humidity, wind_kph, condition: {text} , pressure_mb} = result.current;
            this.setState({
                weatherInfo: {
                    degrees: Math.round(temp_c),
                    condition: text,
                    wind: service.toMetersPerSecond(wind_kph),
                    pressure: service.toMmHg(pressure_mb),
                    humidity: humidity
                },
                loaded: true
            });
        });
    }

    render(){
        return(
            this.state.loaded ? <Content data={this.state.weatherInfo}/> : <Spinner />
        );
    }
} 

const Content = (props) => {
    const {degrees, humidity, wind, pressure, condition} = props.data;
    return(
        <>
            <img className={Styles.icon} src={cloudyIcon} alt={condition}></img>
            <div className={Styles.degreesWrapper}>
                <div className={Styles.degrees}>{degrees}&deg;</div>
                <div className={Styles.condition}>{condition}</div>
            </div>
            <div className={Styles.info}>
                <div className="infoItem">
                    <img className={Styles.infoItemIcon} src={windIcon} alt="" />
                    <div className={Styles.infoItemValue}>{wind}</div>
                </div>
                <div className="infoItem">
                    <img className={Styles.infoItemIcon} src={humidityIcon} alt="" />
                    <div className={Styles.infoItemValue}>{humidity}%</div>
                </div>
                <div className="infoItem">
                    <img className={Styles.infoItemIcon} src={pressureIcon} alt="" />
                    <div className={Styles.infoItemValue}>{pressure} мм</div>
                </div>
            </div>
        </>
    );
}