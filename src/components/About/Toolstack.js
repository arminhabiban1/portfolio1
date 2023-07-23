import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGit,
  SiTailwindcss,
  SiJira,
  SiReacthookform,
  SiRedux,
  SiStorybook,
  

} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiReacthookform />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiStorybook />
      </Col>
    </Row>
  );
}

export default Toolstack;
