import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects We've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={true}
              title="Chatify"
              description="Educational Website for learning and empowering turkish language skills. Full functional and responsive Developed By React, Material UI, ASP.NET and else."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://hizliokumaegitimi.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={true}
              title="All in one toolkit"
              description="5 tools in one. IMDB Movie search, Calculator, Wallpaper, Bomb Game, IP finder in one single website. the site is totally single page and developed under 2024 standards of web developement"
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://sisyx.github.io/toolkit/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={true}
              title="Nab Andishan Persian"
              description="Nab Andishan Parsian, as the first knowledge-based company in the field of strategic management services with an approach to electronic coaching (E-Coaching) in Iran, provides an intelligent mechanism to enhance the excellence of your business. Electronic coaching in the business field is a set of rapidly evolving methods in the world of management that, through a unique combination of web-based tools and applications, fosters exceptional creativity in interactions between coaches and learners. Simultaneously, it significantly increases quality and flexibility while reducing costs and risks."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://nabandishan.com/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
