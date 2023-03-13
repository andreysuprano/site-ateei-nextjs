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
		nome: 'Karina Lima',
		email: 'karina.lima@ateei.com.br',
		slug: 'Karina',
		fotoUrl:
			'https://firebasestorage.googleapis.com/v0/b/siteateei.appspot.com/o/Captura%20de%20Tela%202023-02-16%20a%CC%80s%2008.43.53.png?alt=media&token=8fd06513-f027-4067-bcd8-fa5206fe1a23',
		funcao: 'Analista de Novos Negócios',
		instagram: 'https://instagram.com/karina_vendas_ateei/',
		linkedin: 'https://www.linkedin.com/in/karina-lima-51582678/',
		telefone: '+5541991852426',
		localizacao: 'https://maps.google.com',
		resumo:
			'Profissional integra, com ampla experiência em vendas, graduada em administração e sempre em busca de novos conhecimentos para desenvolver estratégias modernas de atendimento, relacionamento, encantamento e fidelização de clientes.Trabalhando sempre com seriedade, honestidade e foco no resultado de uma parceria saudável, estou disponível para conversarmos e juntos trilharmos um caminho de sucesso!'
	};

	return (
		<Layout pageTitle={card.nome + ' | Digital Card'}>
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
							<a href={'https://wa.me/' + card.telefone}>
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
						<a className="meet-button" href={'https://wa.me/' + card.telefone}>
							<img src={Meet} className="meet-icon" />
							<h3>Agendar uma reunião!</h3>
						</a>
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
