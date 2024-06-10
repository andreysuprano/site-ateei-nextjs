import React from 'react';
import Layout from '@components/layout';
import HeaderOne from '@components/header-one';
import PageHeaderPicture from '@components/page-header-picture.jsx';
import Subscribe from '@components/subscribe';
import Footer from '@components/footer';
import MobileNav from '@components/mobile-nav';

const IndexTwo = () => {
	return (
		<Layout pageTitle="Ateei Group | Trabalhe Conosco!">
			<HeaderOne />
			<MobileNav />
			<PageHeaderPicture />
			<Subscribe />
			<Footer />
		</Layout>
	);
};

export default IndexTwo;
