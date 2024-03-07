import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import about1 from '@images/5.png';
import about2 from '@images/6.png';

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
									Eficiência e<br /> <span>Confiabilidade</span>
								</h3>
							</div>

							<div className="about-one__box">
								<i className="themify-icon-world" />
								<div className="about-one__box-content">
									<h3>Carregador Smart</h3>
									<p>
										O AT160FRN é um carregador Smart de baterias com diversos alarmes para controle
										e monitoramento. Tem potência de 160W, proteção contra sobre tensão e surtos.
										Possui 5 saídas de alarme, entrada de teste de bateria e suporta até 3 fontes
										independentes. É completo para monitorar e carregar sistemas de baterias, com
										indicador LED, fusíveis de proteção e é adaptável para diferentes configurações
										de bateria. Aprovado em 7 ensaios para imunidade a interferências elétricas.
									</p>
									<br />
									<p>
										Um carregador para baterias de 24V / 12Ah (comumente utilizado em sistema com
										duas baterias ligadas em série - 2x12V - 12Ah) e opera como sistema de
										alimentação para equipamentos que fazem uso de baterias, mantendo sua operação
										mesmo sem alimentação principal do sistema, Aprovado em diversas normas; Conheça
										mais em nosso manual;
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
