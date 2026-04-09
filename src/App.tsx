import { useState } from 'react';

import { Console } from './components/Console';
import { Graph } from './components/Graph';
import { Grid } from './components/Grid';

import './App.css';

function App () {
	const [ queryParams, setQueryParams ] = useState<string | undefined>(undefined);

	return (
		<div>
			<Console onQueryChange={setQueryParams} />
			<Grid queryParams={queryParams} />
			<Graph queryParams={queryParams} />
		</div>
	);
}

export default App;
