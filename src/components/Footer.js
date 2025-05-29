import { Col, Container, Row } from "react-bootstrap";
import { Facebook, Github, Linkedin } from "react-bootstrap-icons";
import FooterBanner from "./FooterBanner";

const Footer = () => {
  return (
    <div className="footer" id="footers">
      <Container>
        <Row className="align-items-center">
          <FooterBanner />
          <Col xs={12} md={6} xl={6} className="text-center text-sm-start">
            <img
              alt="Logo"
              src="/static/media/developer logo.f7a19dde7c4e611a9370.png"
            />
          </Col>
          <Col xs={12} md={6} xl={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <Linkedin size={20} color="white" />
              </a>
              <a href="#">
                <Facebook size={20} color="white" />
              </a>
              <a href="#">
                <Github size={20} color="white" />
              </a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
