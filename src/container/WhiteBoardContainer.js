import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import {findAllCourses} from "../services/CourseService";
import CourseManagerContainer from "./CourseManagerContainer";
import CourseEditorComponent from "../components/CourseEditorComponent";

export default class WhiteBoardContainer extends React.Component{

    // state = {
    //     courses: [], // array of courses
    // };
    //
    //     componentDidMount() {
    //         console.log("component did mount");
    //         findAllCourses() // fetches from the remote server all of the 'courses' as a JSON object 'courses' which we will then parse here
    //             .then(courses => { // then once we receive the JSON object -- store it in the variable 'courses' then manipulate it '=>'
    //                 this.setState({ // we're going to manipulate the JSON object 'course' by setting the state's attribute 'courses' (in purple)
    //                                   courses: courses // to the JSON object 'courses' (in grey)
    //                               })
    //             })
    //     }
    //

    render(){
        return (
            // <Router>
            //     <div>
            //     <Link to="/course/table"> Table</Link>  |
            //     <Link to="/course/grid"> Grid </Link>   |
            //     <Link to="/course/edit"> Editor </Link>   |
            //     <Route path="/course/table"
            //            render={() => <CourseManagerContainer
            //                selectCourse={this.selectCourse}
            //                courses={this.courses}/>}/>
            //    <Route path="/course/grid"
            //           render={() => <CourseGridComponent
            //               selectCourse={this.selectCourse}
            //               courses={this.courses}/>}/>
            //     <Route path="/edit"
            //            render={() => <CourseEditorComponent
            //                selectCourse={this.selectCourse}
            //                courses={this.courses}/>}/>
            //     </div>
            //
            // </Router>

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