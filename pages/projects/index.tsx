import { Carousel } from "react-responsive-carousel";
import Layout from "../../components/Layout/Layout";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "./Projects.module.css";

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

const ProjectsPage = () => (
  <Layout title="Projects | Rina Hernández" >
    <h1 className={styles.h1}>Projects</h1>
    <div className={styles.projects}>
      <ProjectItem
        title="Knights' Tracker"
        description="Social media tracker to manage  the growth of all social media platforms that the Knights is present."
        images={[
          "https://i.ibb.co/6NZBTwQ/knights.png",
          "https://i.ibb.co/YhbgpqX/knights-social.png",
          "https://i.ibb.co/rkVjNpq/unknown.png"
        ]}
        link=""
      />
      <ProjectItem
        title="Meraki MarketPlace"
        description="Online marketplace for the city of Tegucigalpa, Honduras, which allows job creation and add competitive advantages to small and medium-sized companies in the city."
        images={[
          "https://i.ibb.co/7NFLDxt/meraki.png",
          "https://i.ibb.co/RYJjkP1/meraki-1.png",
        ]}
        link=""
      />
      <ProjectItem
        title="Artezar"
        description="It is a free virtual bazaar where you can find a wide variety of original products craft, available to residents in the Tegucigalpa, Honduras."
        images={[
          "https://i.ibb.co/41YJ9CS/artezar.png",
          "https://i.ibb.co/cgXYXPc/artezar-3.png",
        ]}
        link=""
      />
      <ProjectItem
        title="Scential Care"
        description="An online store specialized in the production of natural oils, moisturizers, shampoo, handmade soaps and veil masks for cosmetic use for skin and hair care, providing the best natural products to our potential consumers."
        images={[
          "https://i.ibb.co/GVJp8XR/scential-care.png",
          "https://i.ibb.co/HGX6VSR/scential-care-1.png",
          "https://i.ibb.co/WDMT418/scential-care-2.png",
        ]}
        link=""
      />
      <ProjectItem
        title="Rozen"
        description="Rozen is an upcoming startup that focus in the development of affordable atmospheric water generators for vulnerable communities."
        images={[
          "https://i.ibb.co/LQH9RCr/unknown-1.png",
          "https://i.ibb.co/PQNHxvN/rozen.png",
        ]}
        link=""
        />
      <ProjectItem
        title="Lu's Bakery"
        description="Manager of Lu's Pet Bakery, personal small scale business. Lu's Pet Bakery is an organic bakery that specializes in personalized treats and baking products for pets. Lu's Management involves activities such as accounting, financial forecasting, human resources management and supervising production. Instagram: @lusbakeryhn"
        link="https://www.instagram.com/lusbakeryhn/"
        images={[
          "https://i.ibb.co/xStWj4M/rozen-1.png",
          "https://i.ibb.co/ZMQgPQs/lus-removebg-preview.png",
        ]}
      />
    </div>

  </Layout>
);

export default ProjectsPage;
