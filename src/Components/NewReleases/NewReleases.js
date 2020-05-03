import React, { useState, useEffect } from 'react';

function NewReleases() {
	let today = new Date();
	let year = today.getFullYear();
	let month = today.getMonth();

	const [releaseData, setReleaseData] = useState([]);

	useEffect(() => {
		getReleaseData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const newReleaseOptions = {
		key: process.env.REACT_APP_GIANTBOMB_KEY,
		limit: 7,
		format: 'json',
		api: 'https://www.giantbomb.com/api',
		endpoint: '/games',
		sort: 'direction:desc',
		filterYear: year,
		filterMonth: month + 2,
	};

	function getReleaseData() {
		const newReleaseURL = `${newReleaseOptions.api}${newReleaseOptions.endpoint}?api_key=${newReleaseOptions.key}&format=${newReleaseOptions.format}&limit=${newReleaseOptions.limit}&sort=${newReleaseOptions.sort}&filter=expected_release_year:${newReleaseOptions.filterYear},expected_release_month:${newReleaseOptions.filterMonth}`;

		fetch('https://cors-anywhere.herokuapp.com/' + newReleaseURL)
			.then((response) => response.json())
			.then((response) => {
				setReleaseData(response.results);
				// console.log(response);
			})
			.catch(alert.error);
	}

	return (
		<div>
			<h1>Coming Next Month</h1>
			<div className='game-container'>
				{releaseData?.map((game) => (
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

export default NewReleases;
