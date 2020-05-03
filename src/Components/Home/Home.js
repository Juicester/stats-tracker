import React, { useState, useEffect } from 'react';

function Home() {
	const [data, setData] = useState([]);
	const [searchString, setSearchString] = useState('halo');

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
		const url = `https://cors-anywhere.herokuapp.com/${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&format=${searchOptions.format}&limit=${searchOptions.limit}&filter=name:${searchString}`;

		// fetch(url)
		// 	.then((response) => response.json())
		// 	.then((response) => {
		// 		// setReleaseData(response.results);
		// 		console.log(response);
		// 	})
		// 	.catch(console.error);
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
		</div>
	);
}

export default Home;
