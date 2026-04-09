import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';

import './index.css';

async function start () {
	const { worker } = await import('./mocks/browser');

	await worker.start();
}

start().then(() => {
	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
});
