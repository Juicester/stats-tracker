import React from 'react';

// search Form
function SearchForm(props) {
	// destructure the props
	const {
		handleSubmit,
		handleChange,
		searchString,
		limit,
		handleLimitChange,
	} = props;

	// show the Form and set values on submit
	return (
		<form onSubmit={handleSubmit}>
			<input
				placeholder='Search'
				type='text'
				name='searchString'
				required
				onChange={handleChange}
				value={searchString}
				className='search-input'
			/>
			<input
				type='text'
				placeholder='Limit'
				name='limit'
				onChange={handleLimitChange}
				value={limit}
				className='limit-input'
			/>
			<button type='submit'>Search</button>
		</form>
	);
}

export default SearchForm;
