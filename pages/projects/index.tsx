import { useRouter } from "next/router";
import { Carousel } from "react-responsive-carousel";
import Layout from "../../components/Layout/Layout";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "./Projects.module.css";

import translations from "../assets/translations.json";

type Project = {
  title: string,
  description: string,
  link: string,
  images?: string[],
  technologies?: string[],
}

const ProjectItem = ({ title, description, link, images, technologies }: Project) => {
  return (
    <div className={styles.project}>
      <div>
        <h2 className={styles.project__title}>{title}</h2>
        <div className={styles.description__card}>
          <p>{description}</p>
        </div>
        {
          technologies &&
            <div className={styles.project__technologies}>
              <b>Build with</b>
              <div>
                {technologies.map((technology) => 
                  (<span key={technology}>{technology}{technologies[technologies.length - 1] === technology ? "" : ", "}</span>)
                )}
              </div>
            </div>
        }
        <br />
        {
          images &&
            <Carousel
              showArrows
              autoPlay
              infiniteLoop
              swipeable
              showThumbs={false}
            >
              {images.map((image) => (
                <div 
                  key={image}
                  className={styles.project__image}
                >
                    <img 
                      src={image} 
                      alt={title} 
                    />
                </div>
              ))}
            </Carousel>
        }
        {
          link &&
            <button 
              className={styles.project__link}
              onClick={() => window.open(link, "_blank")}
            >
                See
            </button>
        }
      </div>
    </div>
  );
}

const ProjectsPage = () => {
  const { locale } = useRouter();
  const title = translations.projects.find((v) => v.locale == locale).title;
  return <Layout title="Projects | Rina Hernández" >
    <h1 className={styles.h1}>{title}</h1>
    <div className={styles.projects}>
      {
        translations
          .projects
          .filter((hp) => hp.locale === locale)[0]
          .projects
          .map((p, i) => (
            <ProjectItem
              key={p.title}
              title={p.title}
              description={p.description}
              images={p.images_url}
              link={p.url}
            />  
          ))
      }
    </div>
  </Layout>
};

export default ProjectsPage;
