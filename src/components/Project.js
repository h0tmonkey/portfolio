import { Col, Container, Row } from "react-bootstrap";
import admin from "../assets/img/Admin-panel.png";
import chat from "../assets/img/Chat.png";
import donut from "../assets/img/Dughnut.png";
import movie from "../assets/img/Movie.png";
import restaurant from "../assets/img/Restaraunt.png";
import weathermobile from "../assets/img/Weather-mobile.png";
import weather from "../assets/img/weather.png";
import todo from "../assets/img/todo.png";
import TrackVisibility from "react-on-screen";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const projects = [
    {
      title: "Chat",
      description: "Development ",
      imgUrl: chat,
      url: "https://github.com/h0tmonkey/chat",
    },
    {
      title: "Movie",
      description: "Development & design",
      imgUrl: movie,
      url: "https://github.com/h0tmonkey/Movie.lab",
    },
    {
      title: "To do app",
      description: "Development",
      imgUrl: todo,
      url: "https://github.com/h0tmonkey/to_do_app",
    },
    {
      title: "Restaurant",
      description: "Development & design",
      imgUrl: restaurant,
      url: "https://github.com/h0tmonkey/mono-caliente-",
    },
    {
      title: "Weather",
      description: "Development",
      imgUrl: weather,
      url: "https://github.com/h0tmonkey/weather",
    },
    {
      title: "Doughnut shop",
      description: "Development & design",
      imgUrl: donut,
      url: "https://github.com/h0tmonkey/DonutShop",
    },
    {
      title: "Admin panel",
      description: "Development",
      imgUrl: admin,
      url: "https://github.com/h0tmonkey/adminpanel",
    },
    {
      title: "Weather app",
      description: "Development",
      imgUrl: weathermobile,
      url: "https://github.com/h0tmonkey/weather-doner-mobile",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12} md={12} xl={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h1>Projects</h1>
                  <p>
                    As a front-end developer, I’ve worked on a range of projects
                    that reflect my passion for clean design, responsive user
                    interfaces, and interactive web experiences. My work spans
                    from building dynamic single-page applications to optimizing
                    performance for mobile-first platforms. Below are a few
                    highlights of my recent projects:
                  </p>
                  <Row>
                    {projects.map((item, index) => (
                      <ProjectCard
                        url={item.url}
                        title={item.title}
                        description={item.description}
                        imgUrl={item.imgUrl}
                        key={index}
                      />
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Project;
