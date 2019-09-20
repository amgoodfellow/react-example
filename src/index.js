//Every file needs to import react so we have access to all its classes/lifecycle methods
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//This needs to be called in order for the project to insert itself into the HTML
//`document.getElementById` is vanilla JavaScript. In your HTML, you have to have some
//element with the id matching the one in here. React will render itself in that element
ReactDOM.render(<App />, document.getElementById('root'));