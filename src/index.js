import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { createRoot } from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);