import { useRouter } from 'next/router';

import Layout from '../components/Layout/Layout';
import styles from '../styles/Home.module.css'

import translations from "./assets/translations.json";

export default function Home() {
  const { locale } = useRouter();

  return (
    <Layout className={styles.container}>
      <div className={styles.presentation__card}>
        <div
          className={styles.presentation__card__image}
        >
          <img 
            src='/assets/pp.jpeg'
            alt='Rinzun picture'
          />
        </div>
        <div className={styles.presentation__intro}>
          {
            translations
              .homepage
              .filter((hp) => hp.locale === locale)
              .map((hp, i) => (
                <div
                  key={i}
                >
                  <p className={styles.presentation__small_text}>{hp.hiMyNameIs}</p>
                  <h1 className={styles.title}>
                    Rina Hernández.
                  </h1>
                  <p className={styles.description}>
                    {hp.hiMyNameIsDesc}
                  </p>
                  <div className={styles.presentation__extras}>
                    <p className={styles.presentation__extra}>
                      <strong>{hp.skills} </strong>
                      {hp.skillsDesc}
                    </p>
                    <p className={styles.presentation__extra}>
                      <strong>{hp.languages} </strong>
                      {hp.languagesDesc}
                    </p>
                    <p className={styles.presentation__extra}>
                      <strong>{hp.interests} </strong>
                      {hp.interestsDesc}
                    </p>
                  </div> 
                </div>
              ))
          }
        </div>
      </div>
    </Layout>
  )
}