import React from 'react';

import Layout from '@components/layout';
import Instagram from '../../assets/images/icons/instagram.svg';
import Linkedin from '../../assets/images/icons/linkedin.svg';
import WhatsApp from '../../assets/images/icons/whatsapp.svg';
import Location from '../../assets/images/icons/location.svg';
import Meet from '../../assets/images/icons/meet.svg';
import Logo from '../../assets/images/logo-light.png';
import Footer from '../../components/footer';

const Blog = () => {
	const card = {
		nome: 'Murilo Rodrigues',
		email: 'murilo.rodrigues@ateei.com.br',
		slug: 'Murilo',
		fotoUrl:
			'https://firebasestorage.googleapis.com/v0/b/siteateei.appspot.com/o/Captura%20de%20Tela%202023-03-06%20a%CC%80s%2009.04.02.png?alt=media&token=b1091fa9-5334-41f6-aca3-80c39ec0515d',
		funcao: 'Coordenador Comercial',
		instagram: 'https://instagram.com/crystoferson/',
		linkedin: 'https://www.linkedin.com/in/crystoferson-murilo-rodrigues-74775958/',
		telefone: '+554192896111',
		localizacao: 'maps.google.com',
		resumo:
			'Reconhecido ao longo da carreira profissional pelo respeito, ética e aprendizado rápido, com excelente capacidade de análise e raciocínio lógico.Disponível a atender as necessidades do ambiente que esta inserido, com máxima dedicação, presteza e atenção, focado em objetivos e metas se dedicando ao máximo para alcançar o que lhe é solicitado.Sou Fã de café e de atividades ao ar livre, sempre disposto a uma boa caminhada, tenho o bom humor como grande aliado com energia boa para enfrentar os desafios!'
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
