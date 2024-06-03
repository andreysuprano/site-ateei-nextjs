import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logoLight from '@images/logo-light.png';
import astronaut from '@images/astronaut.png';
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
									A nossa história pautada pela honestidade, transparência e muito trabalho! Estamos
									em constante evolução para se adequar às demandas de nossos clientes e também a
									atual realidade do mercado, junto com clientes parceiros e fornecedores homologados,
									podemos garantir nosso processo e firmar o compromisso de atendimento com qualidade
									acima de tudo!
								</p>
								<a href="/">
									Ler Mais <i className="far fa-angle-double-right" />
								</a>
								<hr />
								<div className="footer-widget__social">
									<a href="https://www.facebook.com/ateeigroup" className="fab fa-facebook-f" />
									<a
										href="https://www.instagram.com/ateei_equipamentos/"
										className="fab fa-instagram"
									/>
									<a
										href="https://www.linkedin.com/company/2301016/admin/"
										className="fab fa-linkedin-in"
									/>
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
										<a href="/produtos">Downloads</a>
									</li>
									<li>
										<a href="#contact">Contato</a>
									</li>
									<li>
										<a href="#contact">Trabalhe Conosco</a>
									</li>
								</ul>
							</div>
						</Col>
						<Col sm={12} md={6} lg={6} xl={2}>
							<div className="footer-widget footer-widget__links-widget">
								<h3 className="footer-widget__title">Produtos</h3>
								<ul className="list-unstyled footer-widget__links">
									{/* <li>
										<a href="/downloads">Anunciador ME</a>
									</li>
									<li>
										<a href="/downloads">Antron</a>
									</li> */}
									<li>
										<a href="/produtos">Nossa linha</a>
									</li>
									<li>
										<a href="/produtos/ME3011B">ME3011B</a>
									</li>
									<li>
										<a href="/produtos/Antron">Antron</a>
									</li>
									<li>
										<a href="/produtos/AT10FRN">AT10FRN</a>
									</li>
									<li>
										<a href="/produtos/AT160FRN">AT160FRN</a>
									</li>
								</ul>
							</div>
						</Col>
						<Col sm={12} md={6} lg={6} xl={3}>
							<div className="footer-widget footer-widget__contact">
								<h3 className="footer-widget__title">Endereço</h3>

								<p>Rua Com. Mariano Torres, 168 - Ouro Verde, Campo Largo - PR</p>
								<ul className="footer-widget__contact-list list-unstyled">
									<li>
										<a href="mailto:your.info@gmail.com">
											<i className="themify-icon-email" />
											ateei@ateei.com.br
										</a>
									</li>
									<li>
										<a href="tel:55(41)3291-1600">
											<i className="themify-icon-headphone-alt" /> +55 (41) 3291-1600
										</a>
									</li>
									<li>
										<a href="#">
											<i className="themify-icon-link" /> www.ateei.com.br
										</a>
									</li>
								</ul>
							</div>
						</Col>
					</Row>
				</Container>
			</div>

			<div className="bottom-footer">
				<Container>
					<div className="inner-container">
						<p>Copyright {new Date().getFullYear()} All Right Reserved</p>
						<ul className="list-unstyled footer-menu">
							<li>
								<a href="https://supranodigital.com">
									Desenvolvido por Suprano Digital
									<img src={astronaut} alt="" style={{ width: '50px', cursor: 'pointer' }} />
								</a>
							</li>
						</ul>
					</div>
				</Container>
			</div>
		</footer>
	);
};

export default Footer;
