import React from "react";
import Header from '../header/header';
import Date from "../date/dateView";
import AppsGrid from "../appsGrid/appsGrid";

export default class App extends React.Component {
    render(){
        return(
            <>
                <Header />
                <Date />
                <AppsGrid />
            </>
        );
    }
}