import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import './app.css'
import ContextProvider from './context/ContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ContextProvider>
);
