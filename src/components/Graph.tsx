interface Props {
	queryParams?: string
}

export function Graph ({ queryParams }: Props) {
	return (
		<section>
			<h1>Graph</h1>
			<code>{queryParams}</code>
		</section>
	);
}
