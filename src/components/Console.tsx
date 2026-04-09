type SelectEvent = React.ChangeEvent<HTMLSelectElement>;
interface ConsoleProps {
	onQueryChange: (query: string) => void;
}

export function Console ({ onQueryChange }: ConsoleProps) {
	const handleChange = (event: SelectEvent) => {
		onQueryChange(event.target.value);
	};

	return (
		<section>
			<h1>Console</h1>
			<select
				defaultValue=""
				onChange={handleChange}
			>
				<option value="query1">Query 1</option>
				<option value="query2">Query 2</option>
				<option value="query3">Query 3</option>
				<option value="">Empty</option>
			</select>
		</section>
	);
}
