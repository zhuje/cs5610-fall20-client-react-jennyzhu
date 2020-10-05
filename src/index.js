import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
import CourseListComponent from "./components/CourseListComponent";
import CourseGrid from "./components/CourseGrid";
import './components/StyleCourseListComponent.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


/*
'<App /> ' is an example of component-based-programming -- see App.js for implementation.
 Meaning that we can build our website with components that we can copy/paste
 instead of hard coding it over and over again. We can only render on container here.
 */
ReactDOM.render(

    // <div className={"container wbdv-container"}>
    //     <div>
    //         <div className={"row"}>
    //             <div className={"wbdv-header-title"}>
    //                 <i id={"wbdv-hamburger"} className="fa fa-bars fa-2x" aria-hidden="true"></i>
    //             </div>
    //             {/* We we receiving parameters as 'properties' or 'props' when the class gets called */}
    //             {/* in index.js . */}
    //             <h1> Course Manager </h1>
    //         </div>
    //     </div>
    //     {/*// Instantiating the object 'CourseList components' passing in the parameters -- here the */}
    //     {/*// terminology is 'properties' or 'props'. */}
    //     {/*<CourseListComponent instructor = "Jenny" term="Fall 2020"/>*/}
    //     <CourseListComponent/>


        <Router>

            {/* 1. Introduction to Link and Route */}
            <div>
                <Link to = "/hello">Course Manager</Link>
                <Route path='/hello' component={CourseListComponent}/>
            </div>
            <div>
                <Link to="/page1">Page 1</Link>
                <Route path='/page1' component={CourseGrid}/>
            </div>
            {/*<div>*/}
            {/*    <Link to="/page2">Page 2</Link>*/}
            {/*    <Route path='/page2' component={}/>*/}
            {/*</div>*/}
        </Router>,


    // </div>,


    document.getElementById('root') // JZ :: goes back to index.html to inject dynamically programming (javascript) into the html file

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



