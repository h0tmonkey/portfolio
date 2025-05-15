import { Col, Container, Row } from "react-bootstrap";

const Project = () => {
  const projects = [
    {
      title: "Doughnut shop",
      description: "Development & design",
      imgUrl: null,
      url: "#",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12} md={12} xl={12}>
            <h1>Projects</h1>
            <p>
              As a front-end developer, I’ve worked on a range of projects that
              reflect my passion for clean design, responsive user interfaces,
              and interactive web experiences. My work spans from building
              dynamic single-page applications to optimizing performance for
              mobile-first platforms. Below are a few highlights of my recent
              projects:
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Project;
