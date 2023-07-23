import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import realestate from "../../Assets/Projects/real-estate.png";

import landig from "../../Assets/Projects/landig-page.png";
import marketing from'../../Assets/Projects/marketing.png';

import foodcard from "../../Assets/Projects/food-card.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marketing}
              isBlog={false}
              title="Marketing"
              description="Discover a captivating marketing website created using React and featuring the efficient routing capabilities of React Router DOM. With stylish CSS design elements, this website offers an immersive user experience. Explore our data-driven content and gain valuable insights into the latest marketing trends and strategies. Unlock your marketing potential by visiting our website today."
              ghLink="https://github.com/arminhabiban1/marketing-website"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodcard}
              isBlog={false}
              title="dashboard food"
              description='I developed a website dashboard using Ba Vite, React JSX, Tailwind, and ReactApexChart. The dashboard provides a seamless user experience with its sleek design and intuitive navigation. ReactApexChart library is utilized for visualizing complex data sets and generating insightful analytics. The combination of Ba Vite and React JSX ensures efficient development and optimization, while Tailwind enhances the UI with responsive and visually appealing styles. The resulting dashboard is a powerful tool for monitoring and analyzing data with interactive and customizable charts.'
              ghLink="https://github.com/arminhabiban1/food-card"
              demoLink="https://github.com/arminhabiban1/food-card"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landig}
              isBlog={false}
              title="resturant page"
              description="a responsive and visually captivating website created using React and Pure CSS. With its sleek design and seamless user experience, this website offers an engaging and intuitive browsing experience across various devices. From interactive features to informative content, every element has been meticulously crafted to leave a lasting impression. Explore this dynamic website and witness the perfect fusion of technology and aesthetics."
              ghLink="https://github.com/arminhabiban1/landig-page-resturant"
              demoLink="https://github.com/arminhabiban1/landig-page-resturant"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realestate}
              isBlog={false}
              title="real estate"
              description="I have created a responsive website using React and Material-UI. This combination allows for a dynamic and interactive user interface with smooth transitions between pages. Material-UI's pre-built components and styling options ensure a sleek and modern design, while its responsive features guarantee optimal viewing across different devices. With React and Material-UI, this website delivers an exceptional user experience that adapts seamlessly to various screen sizes and platforms."
              ghLink="https://github.com/arminhabiban1/real-Estate"
              demoLink="https://github.com/arminhabiban1/real-Estate"
            />
          </Col>

          
          
          
          
          
        
        
        

        
        
        
        
        
        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
