import React from 'react';
import { useTranslation } from 'react-i18next';

// import i18n from './i18n';

function FunctionComponent() {
  // const FunctionComponent = () => {
  console.log('FunctionComponent()')
  const { t, i18n } = useTranslation(['view']);
  return <h1>FunctionComponent: {t('title')}</h1>
}
export default FunctionComponent
