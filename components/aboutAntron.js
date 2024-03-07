import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import about1 from '@images/antron-1.png';
import about2 from '@images/antron-2.png';

const AboutProduct = () => {
	return (
		<section className="about-one" id="about">
			<Container>
				<Row>
					<Col lg={6} className="col-lg-6 wow fadeInLeft" data-wow-duration="1500ms">
						<div>
							<img
								src={about1}
								style={{
									maxWidth: 500,
									minWidth: 500,
									maxHeight: 300,
									minHeight: 300
								}}
								alt=""
							/>
							<img
								src={about2}
								style={{
									maxWidth: 500,
									minWidth: 500,
									maxHeight: 300,
									minHeight: 300,
									marginTop: 15
								}}
								alt=""
							/>
						</div>
					</Col>
					<Col lg={6}>
						<div className="about-one__content">
							<div className="block-title text-left">
								<h3>
									Monitoramento e<br /> <span>Robustez</span>
								</h3>
							</div>

							<div className="about-one__box">
								<i className="besit-icon-medal" />
								<div className="about-one__box-content">
									<h3>Praticidade e confiança!</h3>
									<p>
										Equipamento projetado para atender as necessidades de sinalizações, anunciação
										de alarmes e emergências. Utilizado grande parte por industrias, subestações,
										hospitais e diversos outros ambientes.
									</p>
									<p>
										O Antron Confere Segurança a diversos setores, que exigem monitoramento
										constante, contando com alertas visuais e sonoros, o equipamento gera de forma
										simples, recursos de controle, supervisão e telecomando;
										<br />
										Capacidades de atendimento:
										<br />
										<br />
										•⁠ ⁠A Sinalização obedece a uma sequência estabelecida por norma (ISA)
										<br />
										<br />
										•⁠ ⁠Oferece função de comunicação para a automação de um processo ou subestação
										<br />
										<br />
										•⁠ ⁠Ofertado nas seguintes configurações de pontos: 8, 16, 24, 32, 40, 48, 56,
										64, 72, 80, 88 ou 96 pontos.
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
									Solicitar um orçamento <i className="fa fa-arrow-circle-right" />{' '}
								</ScrollLink>

								<div className="about-one__call-box">
									<i className="besit-icon-phone" />
									<p>
										Entre em contato <br /> <a href="tel:55(41)3291-1600">+55(41)3291-1600</a>
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

export default AboutProduct;
