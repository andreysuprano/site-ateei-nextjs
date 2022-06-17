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
              <a href="https://www.facebook.com/ateeigroup" className="fab fa-youtube" style={{color:'#FFF', fontSize:48}}></a>
              {/* <img src={emailIcon} alt="" /> */}
              <h3>Acesse nosso canal do YouTube</h3>
              <p>E veja no detalhe nosso dia dia, processos e estrutura!</p>
            </div>
          </Col>

          <Col sm={12} md={12} lg={6}>
          <iframe width="460" height="265" src="https://www.youtube.com/embed/2kHfKsARft0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Subscribe;
