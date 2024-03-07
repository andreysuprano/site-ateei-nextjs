import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import about1 from '@images/1.png';
import about2 from '@images/2.png';

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
									<h3>Identifique rapidamente</h3>
									<p>
										Com o anunciador de alarme ME3011B, você obtém muito mais do que um simples
										dispositivo. Este é o seu aliado visual, projetado para capturar identificadores
										cruciais com cores vibrantes e texto claro. Cada componente deste produto é
										selecionado com cuidado, garantindo qualidade superior em cada detalhe da
										montagem.
									</p>
								</div>
							</div>

							<div className="about-one__box">
								<i className="besit-icon-medal" />
								<div className="about-one__box-content">
									<h3>Personalização​</h3>
									<p>
										Feito sob medida para atender às suas necessidades operacionais e às
										especificações únicas do seu espaço de controle, este anunciador não apenas se
										adapta perfeitamente, mas também se destaca pela sua capacidade de
										personalização. Seja horizontal ou vertical, em salas de qualquer tamanho, ele
										se encaixa sem esforço, proporcionando uma integração harmoniosa.
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
