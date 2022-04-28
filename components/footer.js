import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logoLight from "@images/logo-light.png";
import footerGallery1 from "@images/resources/footer-g-1-1.jpg";
import footerGallery2 from "@images/resources/footer-g-1-2.jpg";
import footerGallery3 from "@images/resources/footer-g-1-3.jpg";
import footerGallery4 from "@images/resources/footer-g-1-4.jpg";
import footerGallery5 from "@images/resources/footer-g-1-5.jpg";
import footerGallery6 from "@images/resources/footer-g-1-6.jpg";
const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="upper-footer">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6} xl={4}>
              <div className="footer-widget footer-widget__about">
                <a href="/">
                  <img src={logoLight} alt="" />
                </a>
                <p>
                Hoje celebramos 21 anos de empresa, história pautada pela honestidade, transparência e muito trabalho!
                 Estamos em constante evolução para se adequar às demandas de nossos clientes e também a atual realidade do mercado, 
                 junto com clientes parceiros e fornecedores homologados, podemos garantir nosso processo e firmar o compromisso de 
                 atendimento com qualidade acima de tudo!
                </p>
                <a href="/">
                  Ler Mais <i className="far fa-angle-double-right"></i>
                </a>
                <hr />
                <div className="footer-widget__social">
                  <a href="#" className="fab fa-facebook-f"></a>
                  <a href="#" className="fab fa-twitter"></a>
                  <a href="#" className="fab fa-skype"></a>
                  <a href="#" className="fab fa-linkedin-in"></a>
                </div>
              </div>
            </Col>

            <Col sm={12} md={6} lg={6} xl={2}>
              <div className="footer-widget footer-widget__links-widget">
                <h3 className="footer-widget__title">Links Uteis</h3>

                <ul className="list-unstyled footer-widget__links">
                  <li>
                    <a href="#home">Inicio</a>
                  </li>
                  <li>
                    <a href="#about">Quem somos</a>
                  </li>
                  <li>
                    <a href="#service">Nossos Serviços</a>
                  </li>
                  <li>
                    <a href="#qualidade">Qualidade</a>
                  </li>
                  <li>
                    <a href="https://www.ateei.com.br/downloads/">Downloads</a>
                  </li>
                  <li>
                    <a href="#contact">Contato</a>
                  </li>
                </ul>
              </div>
            </Col>

            <Col sm={12} md={6} lg={6} xl={3}>
              <div className="footer-widget footer-widget__contact">
                <h3 className="footer-widget__title">Matriz</h3>

                <p>Rua Com. Mariano Torres, 168 Campo Largo - PR</p>
                <ul className="footer-widget__contact-list list-unstyled">
                  <li>
                    <a href="mailto:your.info@gmail.com">
                      <i className="themify-icon-email"></i>
                      ateei@ateei.com.br
                    </a>
                  </li>
                  <li>
                    <a href="tel:55(41)3291-1600">
                      <i className="themify-icon-headphone-alt"></i> +55 (41) 3291-1600
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="themify-icon-link"></i> www.ateei.com.br
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6} xl={3}>
              <div className="footer-widget footer-widget__contact">
                <h3 className="footer-widget__title">Filial</h3>

                <p>P&D, Montagem e Produção Eletrônica
R. Lídio Oltramari, 1628 - Unidade B - Fraron
Cep: 85503-381 – Pato Branco | PR</p>
                <ul className="footer-widget__contact-list list-unstyled">
                  <li>
                    <a href="mailto:your.info@gmail.com">
                      <i className="themify-icon-email"></i>
                      ateei@ateei.com.br
                    </a>
                  </li>
                  <li>
                    <a href="tel:55(41)3291-1600">
                      <i className="themify-icon-headphone-alt"></i> +55 (41) 3291-1600
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="themify-icon-link"></i> www.ateei.com.br
                    </a>
                  </li>
                </ul>
              </div>
            </Col>

            {/* <Col sm={12} md={6} lg={6} xl={3}>
              <div className="footer-widget">
                <h3 className="footer-widget__title">Instagrame Follow</h3>

                <ul className="list-unstyled footer-widget__gallery">
                  <li>
                    <a href="#">
                      <img src={footerGallery1} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={footerGallery2} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={footerGallery3} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={footerGallery4} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={footerGallery5} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={footerGallery6} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </Col> */}
          </Row>
        </Container>
      </div>

      <div className="bottom-footer">
        <Container>
          <div className="inner-container">
            <p>Copyright {new Date().getFullYear()} All Right Reserved</p>
            <ul className="list-unstyled footer-menu">
              <li>
                <a href="https://supranodigital.com">Desenvolvido por Suprano Digital</a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
