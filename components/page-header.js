import React from 'react';
import imageDefault from '@images/backgrounds/slider-bg-1-2.jpg';
const PageHeader = ({ title, bgImage }) => {
	const image = bgImage ? bgImage : imageDefault;
	return (
		<section className="page-header" style={{ backgroundImage: `url(${image})`, marginTop: '-75px' }}>
			<div className="container text-center">
				<h2>{title}</h2>
			</div>
		</section>
	);
};

export default PageHeader;
