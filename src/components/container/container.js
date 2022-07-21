import React from "react";
import Styles from './container.module.scss'

export default class Container extends React.Component {
    render(){
        return(
            <div className={Styles.container}>
                {this.props.children}
            </div>
        );
    }
} 