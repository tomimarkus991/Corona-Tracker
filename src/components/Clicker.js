import React, { useState } from 'react';

export default function Clicker() {
	const [counter, setCounter] = useState(0);
	return (
		<div className="clicker has-text-centered">
			<h1>Count: {counter}</h1>
			<button
				className="button is-info"
				onClick={() => setCounter(counter + 1)}>
				Add
			</button>
		</div>
	);
}
