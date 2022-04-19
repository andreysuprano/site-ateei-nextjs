import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import about1 from "@images/resources/about-1-1.png";
import about2 from "@images/resources/about-1-2.png";
import leadFree from "@images/lead-free-100x100.png";
import protecao from "@images/protecao-icon-100x100.png";
const Quality = () => {
  return (
    <section className="about-one" id="about">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="about-one__content">
              <div className="block-title text-left">
                <p>
                  <span></span>Qualidade em foco!
                </p>
                <h3>
                  Qualidade <br /> <span>em todo processo produtivo</span>
                </h3>
              </div>

              <p>
              Processo 100% auditado pelos mais rígidos padrões de qualidade, atendendo as normas ISO13485:2016 E ISO9001:2015 – BRTUV Certificadora.
              </p>
              <div className="about-one__box">
                <i className="besit-icon-medal"></i>
                <div className="about-one__box-content">
                  <h3>ISO 9001</h3>
                  <p>
                  Possuímos excelência em nossos processos, garantindo que eles estão sendo gerenciados e em constante evolução.
                  </p>
                </div>
              </div>
              <div className="about-one__box">
                <i className="besit-icon-medal"></i>
                <div className="about-one__box-content">
                  <h3>ISO 13485</h3>
                  <p>
                  Possuímos excelência na produção de itens médicos/hospitalares, garantindo que seu produto médico está sendo produzido com os critérios mínimos regulamentados para a fabricação de itens de tal importância.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col
            lg={6}
            className="col-lg-6 wow fadeInLeft"
            data-wow-duration="1500ms"
            style={{paddingLeft:'100px'}}
          >
            <div className="about-one__images">
              <img src={about1} alt="" />
              <img src={about2} alt="" />
            </div>
          </Col>
        </Row>
        <div className="footer-quality">
          <div className="quality-item">
            <img src={leadFree} alt="" />
            <p>Nossos produtos são livres de chumbo<br></br> e não agridem o meio ambiente.</p>
          </div>
          <div className="quality-item">
            <img src={protecao} alt="" />
            <p>Protegemos a sua propriedade Intelectual.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Quality;
