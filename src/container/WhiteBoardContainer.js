import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import {findAllCourses} from "../services/CourseService";
import CourseManagerContainer from "./CourseManagerContainer";
import CourseEditorComponent from "../components/CourseEditorComponent";

export default class WhiteBoardContainer extends React.Component{


    render(){
        return (

            <BrowserRouter>
                <div className="container">
                    <Link to="/courses"> Courses </Link> |
                    <Link to="/grid"> Grid </Link> |
                    <Link to="/edit"> Editor </Link>

                    <Route path="/courses" exact>
                        <CourseManagerContainer type={"Table"}/>
                    </Route>
                    <Route path="/grid" exact>
                        <CourseManagerContainer type={"Grid"}/>
                    </Route>
                    <Route
                        path="/edit/"
                        exact
                        component={CourseEditorComponent}/>
                    <Route
                        path="/edit/:courseId"
                        exact
                        component={CourseEditorComponent}/>
                </div>
            </BrowserRouter>

        )
    }
}