import React from "react"; // React is a web framework for UI components.
import CourseRowComponent from "./CourseRowComponent";
import {findAllCourses, updateCourse, deleteCourse, createCourse} from "../services/CourseService";
import './StyleCourseListComponent.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import StyleCourseListComponent from "./StyleCourseListComponent.css"


// Declare the class which extends React.Component
class CourseTableComponent extends React.Component {

    constructor(props) {
        super(props)
    }


    /*
    Here --- componentDidCount() -- is called when the component is first called/intialized in
    'index.js'. After render() this function is called because it was able to mount
    to the DOM. Specifically -- we want to contact our remote server to load our list of
    courses we have stored -- and save it locally in in the state variable 'courses:[]'.
    *
    componentDidMount() is invoked immediately after a component is mounted
    (inserted into the tree). Initialization that requires DOM nodes should go here.
    If you need to load data from a remote endpoint, this is a good place to instantiate the
    network request.
     */
    componentDidMount() {
        console.log("component did mountTable");
        findAllCourses() // fetches from the remote server all of the 'courses' as a JSON object 'courses' which we will then parse here
            .then(courses => { // then once we receive the JSON object -- store it in the variable 'courses' then manipulate it '=>'
                this.setState({ // we're going to manipulate the JSON object 'course' by setting the state's attribute 'courses' (in purple)
                                  courses: courses // to the JSON object 'courses' (in grey)
                })
            })
    }



    // Render() is the only required function from the inherited parent React.Component
    render() {
        console.log("render()");
        return (
            <div>

                <table className="table">
                    <thead>
                    <tr>
                        <th> Title</th>
                        <th className={"d-none d-sm-table-cell"}> Owned by </th>

                        <th className={"d-none d-md-table-cell"}> Date Last Modified</th>
                        <th>

                            <Link to={`/grid`}>
                                <i className="fa fa-th icon-spacing wbdv-button-spacing" aria-hidden="true"></i>
                            </Link>
                            <a href="#">
                                <i className="fas fa-sort-alpha-down wbdv-button-spacing"></i>
                            </a>
                        </th>
                    </tr>
                    </thead>
                    <tbody >

                    {
                        // 1) this.state.course -- means we're applying state to the array 'courses' so
                        // that once the array is changed we'll rerender the array 'courses' to reflect
                        // the changes on the browser
                        // 2) .map() just means we're going to take the elements being pass in and
                        // manipulate them with some other functions
                        // Here we're applying the function to each the of the components in the
                        // 3) <CourseRowComponent
                        //     courseBeingEdited={this.state.courseBeingEdited}
                        //     editCourse={this.editCourse}
                        //     deleteCourse={this.deleteCourse}
                        //     course={course}/>
                        // Here we're telling the class 'CourseRowComponent' that you can expect a
                        // property called 'deleteCourse' which will pass in a parameter called
                        // 'this.deleteCourse' which is a reference to our function that will
                        // setState and request the browser to rerender the an 'courses' array
                        // without the deleted course.
                        this.props.courses.map((course,key) =>
                                                   <CourseRowComponent
                                                       courseBeingEdited={this.state.courseBeingEdited}
                                                       editCourse={this.props.editCourse}
                                                       deleteCourse={this.props.deleteCourse}
                                                       course={course}
                                                       key={course._id}
                                                   />
                        )
                    }
                    </tbody>
                </table>
                <button
                    onClick={this.props.addCourse} // when the 'Add Course' button is clicked call the 'addCourse' function
                    className="btn btn-success">
                    Add Course
                </button>
            </div>
        )
    }
}

export default CourseTableComponent


