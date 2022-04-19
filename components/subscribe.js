import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailIcon from "@images/icons/email-icon-1-1.png";
const Subscribe = () => {
  return (
    <section className="subscribe-box">
      <Container>
        <Row className="align-items-center">
          <Col sm={12} md={12} lg={6}>
            <div className="subscribe-box__content">
              <img src={emailIcon} alt="" />
              <h3>Venha para nossa Newsletter</h3>
              <p>Receba conteúdos que vão agregar no seu negócio</p>
            </div>
          </Col>

          <Col sm={12} md={12} lg={6}>
            <form action="#" className="subscribe-box__form">
              <input type="text" placeholder="Email" name="email" />
              <button type="submit" className="thm-btn">
                Inscreva-se
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Subscribe;
