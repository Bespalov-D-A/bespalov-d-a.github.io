import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './1-App/Routing';
import reportWebVitals from './7-Shared/setUpTests/reportWebVitals';
import { worker } from './7-Shared/data/mocks';

worker.start({
  onUnhandledRequest: 'bypass',
});

const rootElement = document.getElementById('root');
if (rootElement !== null) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Routing />);
} else {
  console.error('Root element not found');
}

reportWebVitals();
