import ReactDOM from 'react-dom/client';
import { App } from './App'; // Import App component using named import

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);
