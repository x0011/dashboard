import React from 'react';
import classnames from 'classnames';
import Styles from './appCard.module.scss';

export default class AppCard extends React.Component {
  render() {
    const {
      back, front, showSettings,
    } = this.props;

    const stylesLine = `${Styles.wrapper}`;
    return (
      back !== undefined
        ? (
          <div className={stylesLine}>
            <div className={classnames(
              Styles.inner,
              {
                [Styles.front]: !showSettings,
                [Styles.frontHide]: showSettings,
              },
            )}
            >
              {front}
            </div>
            <div className={classnames(Styles.inner, {
              [Styles.back]: true,
              [Styles.backActive]: showSettings,
            })}
            >
              {back}
            </div>
          </div>
        )
        : (
          <div className={stylesLine}>
            <div className={classnames(Styles.inner, {})}>
              {front}
            </div>
          </div>
        )
    );
  }
}
