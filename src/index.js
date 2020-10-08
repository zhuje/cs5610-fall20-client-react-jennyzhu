import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from './serviceWorker';
import './components/StyleCourseListComponent.css';
import WhiteBoardContainer from "./container/WhiteBoardContainer";

/*
'<App /> ' is an example of component-based-programming -- see App.js for implementation.
 Meaning that we can build our website with components that we can copy/paste
 instead of hard coding it over and over again. We can only render on container here.
 */
ReactDOM.render(
        <WhiteBoardContainer/>,
    document.getElementById('root') // JZ :: goes back to index.html to inject dynamically programming (javascript) into the html file

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



