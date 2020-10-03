import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
import CourseListComponent from "./components/CourseListComponent";

/*
'<App /> ' is an example of component-based-programming -- see App.js for implementation.
 Meaning that we can build our website with components that we can copy/paste
 instead of hard coding it over and over again.
 */

ReactDOM.render(
    <div className="container">
        {/*// Instantiating the object 'CourseList components' passing in the parameters -- here the */}
        {/*// terminology is 'properties' or 'props'. */}
        <CourseListComponent instructor = "Jenny" term="Fall 2020"/>,
    </div>,
    document.getElementById('root') // JZ :: goes back to index.html to inject dynamically programming (javascript) into the html file

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
