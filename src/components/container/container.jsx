import React from 'react';
import Styles from './container.module.scss';

export default class Container extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className={Styles.container}>
        {children}
      </div>
    );
  }
}
