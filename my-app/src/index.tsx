import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'components/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TodoProvider } from 'context/TodoProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') ?? document.body,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </TodoProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
