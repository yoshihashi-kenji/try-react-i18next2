import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

// import i18n from './i18n';

class ClassComponent extends React.Component {
  render() {
    const { t, i18n } = this.props;
    console.log('render')

    return (
      <h1>ClassComponent: {t('title')}</h1>
    )
  }
}

export default withTranslation(['view'])(ClassComponent)
