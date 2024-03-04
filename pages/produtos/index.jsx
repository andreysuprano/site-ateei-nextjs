import React from 'react';
import Layout from '@components/layout';
import HeaderOne from '@components/header-one';
import PageHeaderTwo from '@components/page-header-two';
import Team from '@components/team';
import ContactTop from '@components/contact-top';
import ContactForm from '@components/contact-form';
import Subscribe from '@components/subscribe';
import Footer from '@components/footer';
import MobileNav from '@components/mobile-nav';
const IndexTwo = () => {
	return (
		<Layout pageTitle="Ateei Group | A Tecnologia ao seu alcance!">
			<HeaderOne />
			<MobileNav />
			<PageHeaderTwo title={`Ateei Group`} />
			{/* <ContactTop /> */}
			{/* <ContactForm /> */}
			<Subscribe />
			<Footer />
		</Layout>
	);
};

export default IndexTwo;
