import { Component } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import i18n from '../i18n';
import { withTranslation } from 'react-i18next';

import FunctionComponent from './FunctionComponent';
import LegacyComponentClass from './ClassComponent';

class HomeClass extends Component {
    static async getInitialProps({ ctx }) {
        console.log('HomeClass.getInitialProps()')
            return { count: 0 }
      }

      render () {
        const { t } = this.props;
        const locale = 'en'
        if (i18n.language !== locale) {
            i18n.changeLanguage(locale)
        }
        return (
          <div className={styles.container}>
            <LegacyComponentClass />
            <FunctionComponent />
            <a href="/home-function">home-function</a>
            <main className={styles.main}>
              <h1 className={styles.title}>
                {t('description.part2')} <a href="https://nextjs.org">Class</a>
              </h1>
            </main>
          </div>
        )
    }
}
export default withTranslation(['view'])(HomeClass)