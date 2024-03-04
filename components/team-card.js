import React from 'react';
import Link from 'next';
const TeamCard = ({ data }) => {
	const { image, name, designation } = data;
	return (
		<a
			className="team-one__single"
			style={{ cursor: 'pointer', backgroundColor: 'white', borderRadius: 20, paddingBottom: 15 }}
			href={`/produtos/${name}`}
		>
			<div className="team-one__image">
				<img src={image} alt={name} />
			</div>
			<div className="team-one__content">
				<h3>{name}</h3>
				<p>{designation}</p>
			</div>
		</a>
	);
};

export default TeamCard;
