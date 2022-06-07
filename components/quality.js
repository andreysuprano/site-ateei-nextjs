import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import about1 from "@images/resources/quality-1-1.png";
import about2 from "@images/resources/quality-1-2.png";
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
                  <span></span>Política da qualidade
                </p>
                <h3>
                  Qualidade <br /> <span>em todo processo produtivo</span>
                </h3>
              </div>

              <p>
              Promover a satisfação do cliente, customizando soluções e produtos. Visando à melhoria contínua da qualidade, dos processos de montagem, assistência técnica e soluções de placas e produtos eletrônicos. Nosso comprometimento está em satisfazer os requisitos aplicáveis, valorizando e desenvolvendo colaboradores e fornecedores, mantendo a meta de crescimento baseado nos princípios de a integridade
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
            <p>Podemos atender demandas de processos 100% lead free,<br></br>ou seja, livres de chumbo que nao agridem o meio ambiente.</p>
          </div>
          <div className="quality-item">
            <img src={protecao} alt="" />
            <p>Protegemos a sua propriedade intelectual, com contratos<br></br> idoneos de proteção;</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Quality;
