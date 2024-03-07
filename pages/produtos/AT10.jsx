import React from 'react';
import Layout from '@components/layout';
import HeaderOne from '@components/header-one';
import AboutProduct from '@components/aboutAt10';
import PageHeader from '@components/page-header';
import Footer from '@components/footer';
import MobileNav from '@components/mobile-nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';

import BG_IMAGE from '@images/pageheader/1.png';
import { DOWNLOADS } from '../../data/downloads';

const BlogDetails = () => {
	return (
		<Layout pageTitle="Ateei Group | Produto">
			<HeaderOne />
			<MobileNav />
			<PageHeader title={`Fonte de Alimentação AT10 FRN`} bgImage={BG_IMAGE} />
			<AboutProduct />
			<section
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					paddingBottom: 200,
					paddingTop: 100
				}}
			>
				<h2>Downloads</h2>
				<div style={{ width: '65%' }}>
					<Tabs defaultActiveKey="manuais" id="uncontrolled-tab-example" className="mb-3">
						<Tab eventKey="manuais" title="Manuais">
							<Table responsive>
								<thead>
									<tr>
										<td />
										<th key={1}>Arquivo</th>
										<th>Download</th>
									</tr>
								</thead>
								<tbody>
									{DOWNLOADS.filter((item) => item.produto == 'AT10')
										.filter((item) => item.tipo == 'm')
										.map((item, index) => (
											<tr>
												<td>{index + 1}</td>
												<td>{item.nome}</td>
												<td>
													<a href={item.link}>Baixar</a>
												</td>
											</tr>
										))}
								</tbody>
							</Table>
						</Tab>
						<Tab eventKey="softwares" title="Softwares">
							<Table responsive>
								<thead>
									<tr>
										<td />
										<th key={1}>Arquivo</th>
										<th>Download</th>
									</tr>
								</thead>
								<tbody>
									{DOWNLOADS.filter((item) => item.produto == 'AT10')
										.filter((item) => item.tipo == 's')
										.map((item, index) => (
											<tr>
												<td>{index + 1}</td>
												<td>{item.nome}</td>
												<td>
													<a href={item.link}>Baixar</a>
												</td>
											</tr>
										))}
								</tbody>
							</Table>
						</Tab>
					</Tabs>
				</div>
			</section>
			<Footer />
		</Layout>
	);
};

export default BlogDetails;
