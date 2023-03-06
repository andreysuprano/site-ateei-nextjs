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
		nome: 'Odair Canestraro',
		email: 'odair.canestraro@ateei.com.br',
		slug: 'Odair',
		fotoUrl:'https://firebasestorage.googleapis.com/v0/b/siteateei.appspot.com/o/WhatsApp%20Image%202023-02-22%20at%2013.31.13.jpeg?alt=media&token=6d4a75d7-7843-43a2-88de-f47f732bbeb0',
		funcao: 'Representante Comercial',
		instagram: 'https://instagram.com/odairnatalio/',
		linkedin: 'https://www.linkedin.com/in/odair-natalio-canestraro-a7148b34/',
		telefone: '+5541991042857',
		localizacao: 'maps.google.com',
		resumo: 'Profissional de perfil arrojado, técnico e com alta capacidade de atendimento a especificidade e desenvolvimento de produtos eletronicos, com anos de experiencia na atuação comercial. Com foco dirigido na montagem de placas eletrônicas, SMT e THT, integração de conjuntos e sub-conjuntos eletro-eletrônicos, chicotes elétricos customizados.'
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
					<a className="meet-button" href={'https://wa.me/' + card.whatsapp}>
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
