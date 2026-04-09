import { useDataQuery } from '../hooks/useDataQuery';

interface Props {
	queryParams?: string
}

export function Grid ({ queryParams }: Props) {
	const { data, isLoading, error } = useDataQuery(queryParams);

	return (
		<section>
			<h1>Grid</h1>
			<code>{queryParams}</code>

			{isLoading && <p>Loading...</p>}
			{error && <p>Error: {error.message}</p>}
			{data && <code>{JSON.stringify(data, null, 2)}</code>}
		</section>
	);
}
