import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import about1 from '@images/3.png';
import about2 from '@images/4.png';

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
								<i className="themify-icon-dashboard" />
								<div className="about-one__box-content">
									<h3>Eficiência energética</h3>
									<p>
										Esse produto foi desenvolvido para controlar contatores sem retenção mecânica,
										oferecendo uma ampla faixa de alimentação,retardo de abertura programável, alta
										eficiência energética, proteção contra interferência eletromagnética e
										acapacidadede alimentar várias versões de contatores com uma única fontede
										energia.
									</p>
								</div>
							</div>

							<div className="about-one__box">
								<i className="themify-icon-settings" />
								<div className="about-one__box-content">
									<h3>Programável</h3>
									<p>
										A Fonte AT10 FRN destina-se a alimentar e controlar o dispositivo de Abertura e
										Fechamento de Contatores de MT da Família INCV sem retenção mecânica. Esta fonte
										destaca-se pela ampla faixa de alimentação (90 a 240Vac ou 125 a 340Vcc) sem a
										necessidade de qualquer configuração. Além disto, dispõe de dispositivo de
										retardo de abertura (100 a 500ms) programável através da chave Dip Switch.
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
