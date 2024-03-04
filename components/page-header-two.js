import React from 'react';
import bgImage from '@images/backgrounds/slider-bg-1-2.jpg';
import { TEAM_DATA } from '@data/index';
import { Container } from 'react-bootstrap';
import TeamCard from '@components/team-card';

const PageHeaderTwo = ({ title }) => {
	return (
		<section className="page-header" style={{ backgroundImage: `url(${bgImage})`, marginTop: '-75px' }}>
			<Container>
				<div className="block-title text-center">
					<p>
						<span />Nossos produtos
					</p>
					<h3 style={{ color: 'white' }}>
						Conheça a linha de produtos <br /> <span>ATEEI Group</span>
					</h3>
				</div>

				<div className="team-one__4-col">
					{TEAM_DATA.map((team, index) => <TeamCard key={`team-card-key-${index}`} data={team} />)}
				</div>
			</Container>
		</section>
	);
};

export default PageHeaderTwo;
