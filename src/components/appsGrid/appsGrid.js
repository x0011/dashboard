import React from "react";
import Container from "../container/container";
import Styles from './appsGrid.module.scss';
import AppCard from "../appCard/appCard";

export default class AppsGrid extends React.Component {
    render(){
        return(
            <Container>
                <div className={Styles.wrapper}>
                    <AppCard view={"weather"}/>
                    <AppCard />
                </div>
            </Container>
        );
    }
} 