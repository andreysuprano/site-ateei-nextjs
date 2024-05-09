import React from 'react';

import Layout from '@components/layout';
import Instagram from '../../assets/images/icons/instagram.svg';
import Linkedin from '../../assets/images/icons/linkedin.svg';
import WhatsApp from '../../assets/images/icons/whatsapp.svg';
import Location from '../../assets/images/icons/location.svg';
import Meet from '../../assets/images/icons/meet.svg';
import Logo from '../../assets/images/logo-light.png';
import Footer from '../../components/footer';

const card = {
	nome: 'Talanna Balzer',
	email: 'talanna.balzer@ateei.com.br',
	fotoUrl:
		'https://firebasestorage.googleapis.com/v0/b/projetcs-storage.appspot.com/o/ateei%2FCaptura%20de%20tela%202023-09-27%20122148.png?alt=media&token=e99904f2-3e71-4b83-a557-dc92f49f0be4',
	slug: 'Talanna',
	funcao: 'Analista Comercial',
	instagram: 'https://instagram.com/talanna_balzer?igshid=MmIzYWVlNDQ5Yg==',
	linkedin: 'https://www.linkedin.com/in/talanna-balzer-22a515140/',
	telefone: '+5541984875103',
	localizacao: 'maps.google.com',
	resumo:
		'Reconhecida por ser comunicativa e assertiva, possuindo uma carreira profissional de formações na área e excelente desempenho em meus compromissos e metas. Tendo liderança e dedicação, consigo passar com bom humor os desafios do dia a dia, mantendo o foco nos objetivos. Gosto de agilidade e resultados, assim como alcançar as minhas metas e da equipe na qual estou inserida. Viso a importância dos exercícios físicos, assim como os laços sociais, sendo apaixonada pelo que faço e mantendo sempre um sorriso no rosto. E sempre disposta a novos desafios do nosso dia a dia.'
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
