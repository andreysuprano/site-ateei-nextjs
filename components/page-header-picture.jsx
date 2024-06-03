import React from 'react';
import bgImage from '@images/backgrounds/slider-bg-1-1.jpg';
import { Container } from 'react-bootstrap';
import ContactForm from './contact-form-jobs';

const PageHeaderTwo = () => {
	return (
		<section className="page-header" style={{ backgroundImage: `url(${bgImage})`, marginTop: '-75px' }}>
			<Container>
				<div className="block-title text-center">
					<h3 style={{ color: 'white'}}>
					Venha trabalhar conosco! 
					</h3>
				</div>
				<div style={{ marginTop: '150px' }}>
					<ContactForm/>
				</div>
			</Container>
		</section>
	);
};

export default PageHeaderTwo;
