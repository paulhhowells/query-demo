import { useQuery } from '@tanstack/react-query';

interface DataResponse {
	query: string | null;
	results: { id: number; name: string; }[];
}

async function fetchData (queryParams: string): Promise<DataResponse> {
	const url = queryParams
		? `/api/data?q=${encodeURIComponent(queryParams)}`
		: '';

	const response = await fetch(url);

	if (!response.ok) {
		throw new Error('Network response was not ok');
	}

	return response.json() as Promise<DataResponse>;
}

export function useDataQuery (queryParams?: string) {
	return useQuery({
		queryKey: [ 'data', queryParams ],
		queryFn: () => fetchData(queryParams!),
		enabled: !!queryParams,
	});
}
