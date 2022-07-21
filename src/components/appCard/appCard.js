import React from "react";
import Styles from './appCard.module.scss';
import Weather from "./weather/weather";

export default class AppCard extends React.Component {

    constructor(props){
        super(props);
        this.setComponent();
    }

    allApps = {
        weather: Weather,
        calculator: null,
        quoters: null,
        calendar: null,
        game: null,
        cinema: null
    }

    setComponent(){
        const Name = this.allApps[this.props.view];
        if(Name === undefined) {
            return <span>Компонент не передан</span>;
        }
        return <Name />;
    }

    render(){
        return(
            <div className={Styles.wrapper}>
                <this.allApps.weather />
            </div>
        );
    }
} 