import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import about1 from "@images/resources/about-1-1.png";
import about2 from "@images/resources/about-1-2.png";
const About = () => {
  return (
    <section className="about-one" id="about">
      <Container>
        <Row>
          <Col
            lg={6}
            className="col-lg-6 wow fadeInLeft"
            data-wow-duration="1500ms"
          >
            <div className="about-one__images">
              <img src={about1} alt="" />
              <img src={about2} alt="" />
              <div className="about-one__images-content text-center">
                <h3>+1500</h3>
                <p>Projetos Entregues em 2021</p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-one__content">
              <div className="block-title text-left">
                <p>
                  <span></span>Quem somos
                </p>
                <h3>
                  Seu parceiro para <br /> <span>Montagem de placas eletrônicas</span>
                </h3>
              </div>

              <p>
              Somos uma empresa de tecnologia que foca a gestão completa dos produtos eletrônicos dos Clientes.
              </p>
              <div className="about-one__box">
                <i className="besit-icon-medal"></i>
                <div className="about-one__box-content">
                  <h3>Solução para o seu negócio​</h3>
                  <p>
                  Atuamos desde o projeto e desenvolvimento, passando pela prototipagem, lotes pilotos e posteriores fases de maturação do produto e sua respectiva introdução definitiva no mercado.
                  </p>
                </div>
              </div>
              <div className="about-one__box">
                <i className="besit-icon-clock1"></i>
                <div className="about-one__box-content">
                  <h3>Agilidade e Velocidade</h3>
                  <p>
                  A Ateei auxilia o Cliente gerenciando os projetos e dando suporte técnico e físico para que o produto possa ser lançado com efetividade no mercado.
                  </p>
                </div>
              </div>

              <div className="about-one__call">
                <ScrollLink
                  activeClass="current"
                  className="thm-btn"
                  role="button"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Solicitar um contato <i className="fa fa-arrow-circle-right"></i>{" "}
                </ScrollLink>

                <div className="about-one__call-box">
                  <i className="besit-icon-phone"></i>
                  <p>
                    Entre em contato <br />{" "}
                    <a href="tel:55(41)3291-1600">+55(41)3291-1600</a>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
