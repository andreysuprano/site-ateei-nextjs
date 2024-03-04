import React from 'react';
import Layout from '@components/layout';
import HeaderOne from '@components/header-one';
import AboutProduct from '@components/aboutProduct';
import PageHeader from '@components/page-header';
import Footer from '@components/footer';
import MobileNav from '@components/mobile-nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';

const BlogDetails = () => {
	return (
		<Layout pageTitle="Ateei Group | Produto">
			<HeaderOne />
			<MobileNav />
			<PageHeader title={`Anunciadores de Alarme`} />
			<AboutProduct />
			<section style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
				<div style={{ width: '65%' }}>
					<Tabs defaultActiveKey="manuais" id="uncontrolled-tab-example" className="mb-3">
						<Tab eventKey="manuais" title="Manuais">
							<div style={{ borderRadius: 20 }}>
								<Table responsive>
									<thead>
										<tr>
											<th>#</th>
											<th key={1}>Categoria</th>
											<th>Arquivo</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											{Array.from({ length: 2 }).map((_, index) => (
												<td key={index}>Arquivo {index}</td>
											))}
										</tr>
									</tbody>
								</Table>
							</div>
						</Tab>
						<Tab eventKey="softwares" title="Softwares">
							<div style={{ borderRadius: 20 }}>
								<Table responsive>
									<thead>
										<tr>
											<th>#</th>
											<th key={1}>Arquivo</th>
											<th>Download</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>Manual XPTTOAMSLDKM</td>
											<td>Downlaod</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Tab>
					</Tabs>
				</div>
			</section>
			<Footer />
		</Layout>
	);
};

export default BlogDetails;
