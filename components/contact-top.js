import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bgImage from "@images/backgrounds/contact-bg-1-1.png";
const ContactTop = () => {
  return (
    <div
      className="contact-one__top"
      id="contact"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Container>
        <Row className="justify-content-start justify-content-md-start justify-content-lg-end">
          <Col md={12} lg={12}        
          >
            <div className="block-title">
              <p>
                <span></span>Deixe seu contato
              </p>
              <h3>Em breve nosso time comercial entrara em contato</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactTop;
