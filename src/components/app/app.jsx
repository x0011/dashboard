import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../header/header';
import Date from '../date/dateView';
import AppsGrid from '../appsGrid/appsGrid';
import Settings from '../settings/settings';
import Styles from './app.module.scss';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: './../../assets/img/bg.jpg',
    };
  }

  render() {
    return (
      <div className={Styles.app}>
        <Header />
        <Date />
        <AppsGrid />
      </div>
    );
  }
}

// return (
//   <BrowserRouter>
//     <div className={Styles.app}>
//       <Header />
//       <Date />
//       <Routes>
//         <Route path="/" element={<AppsGrid />} />
//         <Route path="/settings/" element={<Settings />} />
//       </Routes>
//     </div>
//   </BrowserRouter>
// );
