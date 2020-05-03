import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';

function Home() {
	const [games, setGames] = useState([]);
	const [searchString, setSearchString] = useState('');

	const searchOptions = {
		key: process.env.REACT_APP_GIANTBOMB_KEY,
		limit: 5,
		format: 'json',
		api: 'https://www.giantbomb.com/api',
		endpoint: '/games',
	};

	useEffect(() => {
		getGames(searchString);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function getGames(searchString) {
		let offset = 0;
		if (searchString === '') {
			offset = Math.floor(Math.random() * 70000);
		}

		const url = `https://cors-anywhere.herokuapp.com/${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&format=${searchOptions.format}&limit=${searchOptions.limit}&filter=name:${searchString}&offset=${offset}`;

		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setGames(response.results);
				console.log(response);
			})
			.catch(console.error);
	}

	function handleChange(event) {
		setSearchString(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		getGames(searchString);
	}

	return (
		<div>
			<h1>This is the Home Page</h1>
			<SearchForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
			/>
			{games?.map((game) => (
				<div key={game.name}>
					<h1>{game.name}</h1>
					<img src={game.image.small_url} alt='game' />
					<p>{game.deck}</p>
				</div>
			))}
		</div>
	);
}

export default Home;
