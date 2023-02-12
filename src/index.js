import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HaldiramState from './context/Haldiramcontext/HaldiramState.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HaldiramState>
    <App />
    </HaldiramState>
);
