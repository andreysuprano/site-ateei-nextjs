import React from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Layout from '@components/layout';
import Instagram from '../../assets/images/icons/instagram.svg';
import Linkedin from '../../assets/images/icons/linkedin.svg';
import WhatsApp from '../../assets/images/icons/whatsapp.svg';
import Location from '../../assets/images/icons/location.svg';
import Meet from '../../assets/images/icons/meet.svg';
import Link from '../../assets/images/icons/link.svg';
import Logo from '../../assets/images/logo-light.png';
import Footer from '../../components/footer';

import { CARD_DATA } from '@data/cards';
import { useEffect } from 'react';

const Blog = () => {
	const card = {
		nome: 'Miriam Almeida',
		email: 'miriam.almeida@ateei.com.br',
		slug: 'Miriam',
		fotoUrl:'https://firebasestorage.googleapis.com/v0/b/siteateei.appspot.com/o/Captura%20de%20Tela%202023-02-16%20a%CC%80s%2008.44.28.png?alt=media&token=6c258927-e68e-4d06-b180-09de5d092198',
		funcao: 'Analista de Novos Negócios',
		instagram: 'https://instagram.com/miriam.almeida.leite/',
		linkedin: 'https://www.linkedin.com/in/miriam-almeida-leite-69806439/',
		telefone: '+5541991051310',
		localizacao: 'maps.google.com',
		resumo: 'Profissional que se destaca pela conduta de trabalho. Tem senso de justiça apurado, capacidade técnica e excelente espírito de equipe. De personalidade forte e marcante, age sempre com integridade e possui habilidade genuína de transformar problemas em oportunidades!Busca continuamente melhorar seus processos e atendimento, para facilitar o andamento da negociação! Ama pôr do sol e uma boa xícara de café, preto e sem açúcar! Sim, também possui fraquezas, e chocolate é uma delas! Conte comigo para viabilizar suas ideias e projetos.  Juntos podemos tornar possível!',
	}

	return (
		<Layout pageTitle={card.nome +" | Digital Card"}>
			<div className="digital-card-bg">
				<a href="">
					<img src={Logo} className="card-logo" />
				</a>
				<div className="top-area">
					<div className="person-picture">
						<img src={card.fotoUrl} alt="" className="person-avatar" />
					</div>
					<div className="person-details">
						<h1 className="person-name">{card.nome}</h1>
						<div className="send-mail">
							<h6 className="send-mail-text">{card.email}</h6>
						</div>
						<p className="person-position">{card.funcao}</p>
					</div>
				</div>
				<div className="social">
					<div className="social-links">
						<div>
							<a href={card.instagram}>
								<img src={Instagram} alt="" className="social-link" />
							</a>
						</div>
						<div>
							<a href={card.linkedin}>
								<img src={Linkedin} alt="" className="social-link" />
							</a>
						</div>
						<div>
							<a href={'https://wa.me/' + card.whatsapp}>
								<img src={WhatsApp} alt="" className="social-link" />
							</a>
						</div>
						<div>
							<a href={card.localizacao}>
								<img src={Location} alt="" className="social-link" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="bottom-sheet">
				<div className="bts-content">
					<div className="make-meet">
						<div className="meet-button" href={'https://wa.me/' + card.whatsapp}>
							<img src={Meet} className="meet-icon" />
							<h3>Agendar uma reunião!</h3>
						</div>
					</div>
					<p className="presentation">{card.resumo}</p>
					{/* <div className="make-link">
						<div className="link-button">
							<img src={Link} className="meet-icon" />
							<h3>Apresentação comercial</h3>
						</div>
					</div> */}
				</div>
			</div>
			<Footer />
		</Layout>
	);
};

export default Blog;
