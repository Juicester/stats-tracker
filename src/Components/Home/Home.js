import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';

function Home() {
	const [games, setGames] = useState([]);
	const [searchString, setSearchString] = useState('');
	const [limit, setLimit] = useState('');

	const searchOptions = {
		key: process.env.REACT_APP_GIANTBOMB_KEY,
		format: 'json',
		api: 'https://www.giantbomb.com/api',
		endpoint: '/games',
	};

	useEffect(() => {
		getGames(searchString);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function getGames(searchString) {
		let offset = '0';
		let searchLimit;
		if (searchString === '') {
			offset = Math.floor(Math.random() * 70000);
		}
		if (limit === '') {
			searchLimit = '10';
		} else {
			searchLimit = limit;
		}
		const url = `https://cors-anywhere.herokuapp.com/${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&format=${searchOptions.format}&limit=${searchLimit}&filter=name:${searchString}&offset=${offset}`;

		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setGames(response.results);
			})
			.catch(alert.error);
	}

	function handleChange(event) {
		setSearchString(event.target.value);
	}
	function handleLimitChange(event) {
		setLimit(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		getGames(searchString);
	}

	return (
		<div>
			<SearchForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
				limit={limit}
				handleLimitChange={handleLimitChange}
			/>
			<div className='game-container'>
				{games?.map((game) => (
					<div key={game.name} className='game-box'>
						<h1>{game.name}</h1>
						<img src={game.image.original_url} alt={game.name} />
						<p>{game.deck}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Home;
