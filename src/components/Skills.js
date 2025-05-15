import { Col, Container, Row } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import Carousel from "react-multi-carousel";

const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col xs={12} md={12} xl={12}>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Skilled in building responsive, user-friendly interfaces and
                optimizing web performance for seamless user experiences.
              </p>
              <Carousel
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                responsive={responsive}
              >
                <div className="item">
                  <CircularProgressbar
                    value={95}
                    text={"95%"}
                    className="circular-progress-bar"
                  ></CircularProgressbar>
                  <h5>React</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={100}
                    text={"100%"}
                    className="circular-progress-bar"
                  ></CircularProgressbar>
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={100}
                    text={"100%"}
                    className="circular-progress-bar"
                  ></CircularProgressbar>
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={85}
                    text={"85%"}
                    className="circular-progress-bar"
                  ></CircularProgressbar>

                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={85}
                    text={"85%"}
                    className="circular-progress-bar"
                  ></CircularProgressbar>

                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={100}
                    text={"100%"}
                    className="circular-progress-bar"
                  ></CircularProgressbar>

                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={80}
                    text={"80%"}
                    className="circular-progress-bar"
                  ></CircularProgressbar>

                  <h5>Git</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={70}
                    text={"70%"}
                    className="circular-progress-bar"
                  ></CircularProgressbar>

                  <h5>Node.js</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
