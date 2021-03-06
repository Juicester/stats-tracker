import React from 'react';
import Header from './Components/Header/Header';
import { Link, Route } from 'react-router-dom';
import HallOfFame from './Components/HallOfFame/HallOfFame';
import hofData from './data/hof-data.json';
import NewReleases from './Components/NewReleases/NewReleases';
import Home from './Components/Home/Home';
import './App.css';

// main app with Links and Routes to the pages
function App() {
	return (
		<div className='App'>
			<Header />
			<div>
				<nav>
					<Link to='/'>
						<h1>Home</h1>
					</Link>
					<Link to='/HallOfFame'>
						<h1>Hall of Fame</h1>
					</Link>
					<Link to='/NewReleases'>
						<h1>New Releases</h1>
					</Link>
				</nav>
			</div>
			<Route path='/' exact={true} component={Home} />
			<Route
				path='/HallOfFame'
				render={() => {
					return <HallOfFame data={hofData} />;
				}}
			/>
			<Route path='/NewReleases' component={NewReleases} />
			<footer>
				<h3>Powered by the GIANTBOMB API</h3>
			</footer>
		</div>
	);
}
export default App;
