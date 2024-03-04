import React from 'react';
import Layout from '@components/layout';
import HeaderOne from '@components/header-one';
import About from '@components/about';
import BlogContent from '@components/blog-content';
import PageHeader from '@components/page-header';
import Footer from '@components/footer';
import MobileNav from '@components/mobile-nav';
import Project from '@components/project';

const BlogDetails = () => {
	return (
		<Layout pageTitle="Ateei Group | Produto">
			<HeaderOne />
			<MobileNav />
			<PageHeader title={`ME3011b`} />
			<About />
			<Project />
			<Footer />
		</Layout>
	);
};

export default BlogDetails;
