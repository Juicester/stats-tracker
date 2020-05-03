import React from 'react';
import Container from 'react-bootstrap/Container';

function HallOfFame(props) {
	// console.log(props);

	return (
		<Container fluid>
			<div className='HOF Gallery'>
				{props.data.map((game) => (
					<div key={game.name}>
						<h1>{game.name}</h1>
						<img src={game.image.small_url} alt='game' />
						<p>{game.deck}</p>
					</div>
				))}
			</div>
		</Container>
	);
}

export default HallOfFame;
