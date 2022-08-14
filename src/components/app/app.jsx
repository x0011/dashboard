import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../header/header';
import Date from '../date/dateView';
import AppsGrid from '../appsGrid/appsGrid';
import Settings from '../settings/settings';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Date />
          <Routes>
            <Route path="/" element={<AppsGrid />} />
            <Route path="/settings/" element={<Settings />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
