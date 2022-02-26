import * as React from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import Link from "next/link";

import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

import styles from "./Layout.module.css";

import translations from "../../pages/assets/translations.json";

type Props = {
  title?: string;
  className?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  className = "",
  title = "Rina Hernández"
}) => {
  const { locale, locales, asPath } = useRouter();
  const tr = translations.navbar.find((v) => v.locale == locale);

  return <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌻</text></svg>"></link>
    </Head>
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div>
          {
              locales.map((l, i) => {
                  return <span
                      key={i}
                      className={styles.locale}
                  >
                    <span className={l === locale ? styles.selected__locale : styles.locale} >
                      <Link
                          href={asPath}
                          locale={l}
                      >
                        {
                            l.toString().toUpperCase()
                        }
                      </Link>
                    </span>
                    { i < locales.length - 1 && <span> | </span> }
                  </span>
              })
          }
        </div>
        <div>
          <ul>
            <li>
              <Link href="/">
                <a>{tr.home}</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a>{tr.projects}</a>
              </Link>
            </li>
            <li>
              <Link href="/certificates">
                <a>{tr.certificates}</a>
              </Link>
            </li>
            <li>
              <a 
                className={styles.button__resume} 
                href={`/${tr.resume_name}`}
                target="_blank" 
                rel="noreferrer"
              >
                {tr.resume}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <main className={styles.main}>
      {children}
    </main>
    <footer className={styles.footer}>
        <_FooterSocialButton
          to="https://twitter.com/Rinzun1"
        >
          <BsTwitter color="white" />
        </_FooterSocialButton>
        <_FooterSocialButton
          to="https://www.linkedin.com/in/rinahernandezzun/"
        >
          <FaLinkedinIn color="white" />
        </_FooterSocialButton>
        <_FooterSocialButton
          to="https://github.com/rinaherzun"
        >
          <FiGithub color="white" />
        </_FooterSocialButton>
      </footer>
  </div>
};

const _FooterSocialButton = ({children, to}) => {
    return <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.footerSocialButton}
    >
      {children}
    </a>
  }
  

export default Layout;
