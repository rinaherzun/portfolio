import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link';
import Layout from '../components/Layout/Layout';

export default function Home() {
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
          <p className={styles.presentation__small_text}>Hi, my name is</p>
          <h1 className={styles.title}>
            Rina Hernández.
          </h1>
          <p className={styles.description}>
            I am a Business Managament graduate with experience in freelancing projects and personal small scale business management. Confident leader and enthusiastic communicator. Avid learner in technology skills especially interested in data science and renewable resources. Self motivated, therefore, effective at completing tasks with minimal supervision.
          </p>
          <div className={styles.presentation__extras}>
            <p className={styles.presentation__extra}>
              <strong>Skills: </strong>
              Asana, Google Calendar, Javascript, Python, Office, Project Management, Strong Critical Thinking, Excelent Oral and Written
  Communication, Analytical Thinking, Problem Solving, Interpersonal Communication, Time Management, Wordpress, Digital Advertising
            </p>
            <p className={styles.presentation__extra}>
              <strong>Languages: </strong>
              Spanish (native), English (C1)
            </p>
            <p className={styles.presentation__extra}>
              <strong>Interests: </strong>
              Computer Science, Gaming, Crypto, Coding Renewable Resources, Animal Protection, Fintech
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}