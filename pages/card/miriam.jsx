import React from 'react';
import Layout from '@components/layout';

import Miriam from '../../assets/images/cards/miriam.jpeg';
import Instagram from '../../assets/images/icons/instagram.svg';
import Linkedin from '../../assets/images/icons/linkedin.svg';
import WhatsApp from '../../assets/images/icons/whatsapp.svg';
import Location from '../../assets/images/icons/location.svg';
import Meet from '../../assets/images/icons/meet.svg';
import Logo from '../../assets/images/logo-light.png';

const Blog = () => {
	return (
		<Layout pageTitle="Miriam Almeida | Digital Card">
			<div className="digital-card-bg">
				<a href="">
					<img src={Logo} className="card-logo" />
				</a>
				<div className="top-area">
					<div className="person-picture">
						<img src={Miriam} alt="" className="person-avatar" />
					</div>
					<div className="person-details">
						<h1 className="person-name">Miriam Almeida</h1>
						<div className="send-mail">
							<h6 className="send-mail-text">miriam.almeida@ateei.com.br</h6>
						</div>
						<p className="person-position">Analista de Novos Negócios</p>
					</div>
				</div>
				<div className="social">
					<div className="social-links">
						<div>
							<a href="">
								<img src={Instagram} alt="" className="social-link" />
							</a>
						</div>
						<div>
							<a href="">
								<img src={Linkedin} alt="" className="social-link" />
							</a>
						</div>
						<div>
							<a href="">
								<img src={WhatsApp} alt="" className="social-link" />
							</a>
						</div>
						<div>
							<a href="">
								<img src={Location} alt="" className="social-link" />
							</a>
						</div>
					</div>
				</div>
				<div className="make-meet">
					<div className="meet-button">
						<img src={Meet} className="meet-icon" />
						<h3>Agendar uma reunião!</h3>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Blog;
