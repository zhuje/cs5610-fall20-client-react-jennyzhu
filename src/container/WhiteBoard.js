import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import CourseTable from "../components/CourseTable";
import CourseGrid from "../components/CourseGrid";
import {findAllCourses} from "../services/CourseService";
import CourseManager from "./CourseManager";
import CourseEditor from "../components/CourseEditor";

export default class WhiteBoard extends React.Component{

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
            //            render={() => <CourseManager
            //                selectCourse={this.selectCourse}
            //                courses={this.courses}/>}/>
            //    <Route path="/course/grid"
            //           render={() => <CourseGrid
            //               selectCourse={this.selectCourse}
            //               courses={this.courses}/>}/>
            //     <Route path="/edit"
            //            render={() => <CourseEditor
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
                        <CourseTable instructor="Jose"/>
                    </Route>
                    <Route path="/grid" exact>
                        <CourseGrid/>
                    </Route>
                    <Route
                        path="/edit/"
                        exact
                        component={CourseEditor}/>
                    <Route
                        path="/edit/:courseId"
                        exact
                        component={CourseEditor}/>
                </div>
            </BrowserRouter>

        )
    }
}