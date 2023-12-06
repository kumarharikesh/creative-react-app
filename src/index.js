import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import TodoApp from './components/App';
import RoutePages from "./components/route";
import Footer from "./components/footer";


const root1 = ReactDOM.createRoot(document.getElementById('root1'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root1.render(<React.StrictMode><TodoApp /></React.StrictMode>);
root2.render(<React.StrictMode><RoutePages /></React.StrictMode>);
root3.render(<React.StrictMode><Footer /></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
