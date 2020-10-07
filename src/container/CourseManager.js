import React from "react";
import CourseTable from "../components/CourseTable";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import CourseGrid from "../components/CourseGrid";



export default class CourseManager extends React.Component{
    render(){
        return (
            <div className={"container wbdv-container"}>
                <div>
                    <div className={"row"}>
                        <div className={"wbdv-header-title"}>
                            <i id={"wbdv-hamburger"} className="fa fa-bars fa-2x" aria-hidden="true"></i>
                        </div>
                        {/* We we receiving parameters as 'properties' or 'props' when the class gets called */}
                        {/* in index.js . */}
                        <h1> Course Manager </h1>
                    </div>
                </div>
                     {/*// Instantiating the object 'CourseList components' passing in the parameters -- here the */}
                    {/*// terminology is 'properties' or 'props'. */}
                    {/*<CourseTable instructor = "Jenny" term="Fall 2020"/>*/}
                 <CourseTable/>




            {/*    <Router>*/}
            {/*        <div>*/}
            {/*            <nav>*/}
            {/*                <ul>*/}
            {/*                    <li>*/}
            {/*                        <Link to="/">Home</Link>*/}
            {/*                    </li>*/}
            {/*                    <li>*/}
            {/*                        <Link to="/about">About</Link>*/}
            {/*                    </li>*/}
            {/*                    <li>*/}
            {/*                        <Link to="/users">Users</Link>*/}
            {/*                    </li>*/}
            {/*                </ul>*/}
            {/*            </nav>*/}

            {/*            /!* A <Switch> looks through its children <Route>s and*/}
            {/*renders the first one that matches the current URL. *!/*/}
            {/*            <Switch>*/}
            {/*                <Route path="/about">*/}
            {/*                    <CourseTable />*/}
            {/*                </Route>*/}
            {/*                <Route path="/users">*/}
            {/*                    <CourseGrid />*/}
            {/*                </Route>*/}
            {/*                <Route path="/">*/}
            {/*                    <CourseManager />*/}
            {/*                </Route>*/}
            {/*            </Switch>*/}
            {/*        </div>*/}
            {/*    </Router>*/}










            </div>
        )
    }



}