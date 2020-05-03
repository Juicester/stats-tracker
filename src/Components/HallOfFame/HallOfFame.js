import React from 'react';
import Container from 'react-bootstrap/Container';

function HallOfFame(props) {
	// console.log(props);

	return (
		<Container fluid>
			<h1>Juicester's Top 5</h1>
			<div className='game-container'>
				{props.data.map((game) => (
					<div key={game.name} className='game-box'>
						<h1>{game.name}</h1>
						<img src={game.image.original_url} alt={game.name} />
						<p>{game.deck}</p>
					</div>
				))}
			</div>
		</Container>
	);
}

export default HallOfFame;
