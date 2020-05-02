import React from 'react';

function HallOfFame(props) {
	console.log(props);

	return (
		<div className='HOF Gallery'>
			{props.data.map((game) => (
				<div key={game.name}>
					<h1>{game.name}</h1>
					<img src={game.image.small_url} alt='game image' />
					<p>{game.deck}</p>
				</div>
			))}
		</div>
	);
}

export default HallOfFame;
