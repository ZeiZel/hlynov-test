import React, { StrictMode } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, StoreProvider, ErrorBoundary } from '@/app/providers';
import { App } from '@/app/App';
import '@/app/styles/index.scss';

const container: HTMLElement | null = document.querySelector('#root');

if (!container) {
	throw new Error(
		'К сожалению, не был найден контейнер для монтирования React-элемента',
	);
}

const root: Root = createRoot(container);
root.render(
	<StrictMode>
		<ErrorBoundary>
			<StoreProvider>
				<BrowserRouter>
					<ThemeProvider>
						<App />
					</ThemeProvider>
				</BrowserRouter>
			</StoreProvider>
		</ErrorBoundary>
	</StrictMode>,
);
