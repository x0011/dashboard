import React from "react";
import Styles from './header.module.scss';

export default class Header extends React.Component {
    render(){
        return(
            <div className={Styles.wrapper}>
                <div className={Styles.owner}>Ярослав Пантелеев</div>
                <div className={Styles.settings}>Настройки</div>
            </div>
        );
    }
} 