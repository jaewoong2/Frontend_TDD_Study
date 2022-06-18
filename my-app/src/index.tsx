import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'components/App';
import { TodoProvider } from 'context/TodoProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') ?? document.body,
);

root.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
);
