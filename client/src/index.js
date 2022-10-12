/* React */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

/* App.js */
import App from './App';

/* Context */
import { TagProvider } from './Contexts/Register.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <TagProvider>
            <App />
        </TagProvider>
    </BrowserRouter>
);
