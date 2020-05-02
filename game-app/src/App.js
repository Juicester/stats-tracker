import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import { Link, Route } from 'react-router-dom';
import HallOfFame from './Components/HallOfFame/HallOfFame';
import hofData from './data/hof-data.json';
import NewReleases from './Components/NewReleases/NewReleases';

function App() {
	const [data, setData] = useState([]);

	const searchOptions = {
		key: process.env.REACT_APP_GIANTBOMB_KEY,
		limit: 10,
		format: 'json',
		name: 'Halo',
		api: 'https://www.giantbomb.com/api',
		endpoint: '/games',
	};

	const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&format=${searchOptions.format}&limit=${searchOptions.limit}&filter=name:${searchOptions.name}`;
	console.log(url);
	// const url =
	// 	'https://www.giantbomb.com/api/games/?api_key=42a7abdb6d79eb765754f008c2d5d3fceb2cdc70&format=json&filter=name:Call%20of%20Duty';
	// useEffect(() => {
	// 	fetch('https://cors-anywhere.herokuapp.com/' + url)
	// 		.then((res) => res.json())
	// 		.then(console.log)
	// 		.catch(console.error);
	// });

	// console.log(hofData);

	return (
		<div className='App'>
			<Header />
			<div>
				<nav>
					<Link to='/HallOfFame'>
						<h1>Hall of Fame</h1>
					</Link>
					<Link to='/NewReleases'>
						<h1>New Releases</h1>
					</Link>
				</nav>
			</div>
			<Route
				path='/HallOfFame'
				render={() => {
					return <HallOfFame data={hofData} />;
				}}
			/>
			<Route path='/NewReleases' component={NewReleases} />
		</div>
	);
}
export default App;

const hofURL =
	'https://www.giantbomb.com/api/games/?api_key=42a7abdb6d79eb765754f008c2d5d3fceb2cdc70&format=json&limit=10&sort=direction:desc&filter=expected_release_year:2021';

