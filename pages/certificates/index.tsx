import Layout from "../../components/Layout/Layout";

import styles from "./Certificates.module.css";

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

const CertificatesPage = () => (
  <Layout title="Certificates | Rina Hernández" >
    <h1 className={styles.h1}>Certificates</h1>
    <div className={styles.certificates}>
      <CertificateItem
        title="Basic Algorithms and Logical Thinking Course"
        logo="https://static.platzi.com/media/achievements/badge-algoritmos-pensamiento-logico-4b7a05c5-470a-41e6-bcd9-4693f4207a03.png"
        link="https://platzi.com/p/rinaherzun447/curso/2218-pensamiento-logico/diploma/detalle/ "
      />
      <CertificateItem
        title="Basic JavaScript Course"
        logo="https://static.platzi.com/media/achievements/badge-basicojs-e2ead888-428e-4f55-962c-8894aeaeacda.png"
        link="https://platzi.com/p/rinaherzun447/curso/1814-basico-javascript/diploma/detalle/"
      />
      <CertificateItem
        title="Basic Python Course"
        logo="https://static.platzi.com/media/achievements/badge-basico-python-bdcc67b3-031d-4dce-8e78-5699fb243149.png"
        link="https://platzi.com/p/rinaherzun447/curso/1937-python/diploma/detalle/"
      />
      <CertificateItem
        title="Introduction to the Web: History and Functioning of the Internet"
        logo="https://static.platzi.com/media/achievements/badge-introduccion-web-historia-internet-4c18b86e-86f0-4ea0-aa16-5ed1cf53be25.png"
        link="https://platzi.com/p/rinaherzun447/curso/2053-introweb/diploma/detalle/"
      />
      <CertificateItem
        title="Free Basic Programming Course"
        logo="https://static.platzi.com/media/achievements/1050-bfb74f83-8e2e-4ff7-a66d-77d2c0067908.png"
        link="https://platzi.com/p/rinaherzun447/curso/1050-programacion-basica/diploma/detalle/"
      />
    </div>

  </Layout>
);

export default CertificatesPage;
