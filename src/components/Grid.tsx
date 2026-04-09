interface Props {
	queryParams?: string
}

export function Grid ({ queryParams }: Props) {
	return (
		<section>
			<h1>Grid</h1>
			<code>{queryParams}</code>
		</section>
	);
}
