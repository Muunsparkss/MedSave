import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './images/logo.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <head>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&family=Protest+Guerrilla&display=swap" rel="stylesheet"/>
    </head>
        <nav class="navbar">
        <a class="nav-link" href="#">Home</a>
        <a class="nav-link" href="#">Our Solutions</a>
        <img class="logo" src={logo} alt="Logo"/>
        <a class="nav-link" href="#">Contact</a>
        <a class="nav-link" href="#">Projects</a>
        <span class="nav-side">
        <button class="nav-but">Login</button>
        <button class="nav-but">Register</button>
        </span>
        </nav>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
