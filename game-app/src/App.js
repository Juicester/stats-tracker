import React, { useState, useEffect } from 'react';
function App() {
	const [data, setData] = useState([]);
	const url =
		'https://www.giantbomb.com/api/games/?api_key=42a7abdb6d79eb765754f008c2d5d3fceb2cdc70&format=json&filter=name:Call%20of%20Duty';
	useEffect(() => {
		fetch('https://cors-anywhere.herokuapp.com/' + url)
			.then((res) => res.json())
			.then(console.log)
			.catch(console.error);
	}, [url]);
	return <div className='App'></div>;
}
export default App;
