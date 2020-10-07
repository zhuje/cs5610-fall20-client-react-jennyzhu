import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import CourseTable from "../components/CourseTable";
import CourseGrid from "../components/CourseGrid";
import {findAllCourses} from "../services/CourseService";
import CourseManager from "./CourseManager";

export default class WhiteBoard extends React.Component{
        state = {
            courses: [], // array of courses
        };

        componentDidMount() {
            console.log("component did mount");
            findAllCourses() // fetches from the remote server all of the 'courses' as a JSON object 'courses' which we will then parse here
                .then(courses => { // then once we receive the JSON object -- store it in the variable 'courses' then manipulate it '=>'
                    this.setState({ // we're going to manipulate the JSON object 'course' by setting the state's attribute 'courses' (in purple)
                                      courses: courses // to the JSON object 'courses' (in grey)
                                  })
                })
        }


    render(){
        return (
            <Router>
                <div>
                <Link to="/course/table"> Table</Link>  |
                <Link to="/course/grid"> Grid </Link>
                <Route path="/course/table"
                       render={() => <CourseManager courses={this.courses}/>}/>
               <Route path="/course/grid"
                      render={() => <CourseGrid courses={this.courses}/>}/>
                </div>
            </Router>
        )
    }
}