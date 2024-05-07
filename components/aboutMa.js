import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import about1 from '@images/ma-1.png';
import about2 from '@images/ma-2.png';

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
									Monitoramento e<br /> <span>Segurança</span>
								</h3>
							</div>

							<div className="about-one__box">
								<i className="besit-icon-clock1" />
								<div className="about-one__box-content">
									<h3>Sinalização e confiabilidade!</h3>
									<p>
										Com a Linha de Sinalizadores MA2016b você garante a sua sinalização visual de
										forma clara, vibrante e objetiva, com plaquetas translucidas e gravações em
										baixo relevo, obtenha de forma rápida a visualização do alerta a ser averiguado;
									</p>
								</div>
							</div>

							<div className="about-one__box">
								<i className="besit-icon-medal" />
								<div className="about-one__box-content">
									<h3>Personalização sob demanda!</h3>
									<p>
										Com recurso de iluminação do tipo backlight (nas cores vermelho, amarelo, verde
										ou branco) ou no led Aparente, de 5mm (nas cores vermelho, amarelo, verde ou
										branco), podemos customizar conforme modelos disponiveis em nosso manual apartir
										de 4 ate 252 pontos de sinalização com tensões de 12, 24, 48, 110, 125, 220 Vcc,
										110, 127, 220 Vca, (demais tensões sob consulta) operando em 50/60hz +-10%.
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
