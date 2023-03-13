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

const card = {
	nome: 'Ellen Tracz',
	email: 'ellen.tracz@ateei.com.br',
	fotoUrl:
		'https://firebasestorage.googleapis.com/v0/b/siteateei.appspot.com/o/Captura%20de%20Tela%202023-03-06%20a%CC%80s%2009.03.12.png?alt=media&token=6bc9cd1d-c4c4-4e22-aed5-042792ea0314',
	slug: 'Ellen',
	funcao: 'Assistente Comercial',
	instagram: 'https://instagram.com/ellentracz/',
	linkedin: 'https://www.linkedin.com/in/ellen-tracz-4b6b7a1a8/',
	telefone: '+554132911600',
	localizacao: 'maps.google.com',
	resumo:
		'Sou adepta de atividades contemplativas e amo um dia ensolarado com direito a piscina. Gosto de ser um ponto de apoio para meus colegas e acredito que essa característica contribui ao bom convívio. Respeitada por apresentar grande compromisso com as demandas da empresa e ótima capacidade de adaptação em situações difíceis. Destaca-se a persistência com seus objetivos e capacidade de aprendizado rápido. Compreende que um bom trabalho é aquele que te faz crescer como pessoa e como profissional.'
};
const Blog = () => {
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
