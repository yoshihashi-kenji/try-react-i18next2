import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';

function HomeFunction() {
  const locale = 'en'
  if (i18n.language !== locale) {
     i18n.changeLanguage(locale)
  }
  const { t } = useTranslation(['view']);
  return (
    <div className={styles.container} suppressHydrationWarning>
      <ClassComponent />
      <FunctionComponent />
      <a href="/home-class">home-class</a>
      <main className={styles.main}>
        <h1 className={styles.title}>
        {t('description.part2')} <a href="https://nextjs.org">Function</a>
        </h1>
      </main>
    </div>
  )
}
HomeFunction.getInitialProps = async ({ ctx }) => {
  console.log('HomeFunction.getInitialProps()')
  
  return { count: 0 }
}
export default HomeFunction