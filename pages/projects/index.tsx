import Layout from "../../components/Layout/Layout";

import styles from "./Projects.module.css";

type Project = {
  title: string,
  description: string,
  link: string,
  image?: string,
  technologies?: string[],
}

const ProjectItem = ({ title, description, link, image, technologies }: Project) => {
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
          image &&
            <div className={styles.project__image}>
                <img 
                  src={image} 
                  alt={title} 
                />
            </div>
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

const ProjectsPage = () => (
  <Layout title="Projects | Rina Hernández" >
    <h1 className={styles.h1}>Projects</h1>
    <div className={styles.projects}>
      <ProjectItem
        title="Rozen"
        description="Leader of the startups' developing team. Rozen is an upcoming startup that focus in the development of affordable atmospheric water generators for vulnerable communities."
        link=""
      />
      <ProjectItem
        title="Lu's Bakery"
        description="Manager of Lu's Pet Bakery, personal small scale business. Lu's Pet Bakery is an organic bakery that specializes in personalized treats and baking products for pets. Lu's Management involves activities such as accounting, financial forecasting, human resources management and supervising production. Instagram: @lusbakeryhn"
        link="https://www.instagram.com/lusbakeryhn/"
        image="https://i.ibb.co/ZMQgPQs/lus-removebg-preview.png"
      />
    </div>

  </Layout>
);

export default ProjectsPage;
