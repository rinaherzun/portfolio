import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";

import styles from "./Certificates.module.css";

import translations from "../assets/translations.json";

type Certificate = {
  title: string,
  link: string,
  logo?: string,
}

const CertificateItem = ({ title, link, logo }: Certificate) => {
  return (
    <div className={styles.certificate}>
        {
            logo &&
            <div className={styles.certificate__logo}>
                <img 
                    src={logo} 
                    alt={title} 
                />
            </div>
        }
        <h2 className={styles.certificate__title}>{title}</h2>
        <br />
        {
            link &&
            <button 
                className={styles.certificate__link}
                onClick={() => window.open(link, "_blank")}
            >
                See
            </button>
        }
    </div>
  );
}

const CertificatesPage = () => {
  const { locale } = useRouter();
  const title = translations.certificates.find((v) => v.locale == locale).title;
  return <Layout title="Certificates | Rina Hernández" >
    <h1 className={styles.h1}>{title}</h1>
    <div className={styles.certificates}>
      {
          translations
            .certificates
            .filter((hp) => hp.locale === locale)[0]
            .certificates
            .map((c, i) => (
              <CertificateItem
                key={c.title}
                title={c.title}
                logo={c.logo}
                link={c.url}
              />
            ))
        }   
    </div>

  </Layout>
};

export default CertificatesPage;
