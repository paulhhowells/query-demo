import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Console } from './components/Console';
import { Graph } from './components/Graph';
import { Grid } from './components/Grid';

import './App.css';

const queryClient = new QueryClient();

export function App () {
	const [ queryParams, setQueryParams ] = useState<string | undefined>(undefined);

	return (
		<QueryClientProvider client={queryClient}>
			<div className="app">
				<Console onQueryChange={setQueryParams} />
				<Grid queryParams={queryParams} />
				<Graph queryParams={queryParams} />
			</div>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
