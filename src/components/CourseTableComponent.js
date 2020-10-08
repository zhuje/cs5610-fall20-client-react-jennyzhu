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


    // We declare what objects we want to pay attention to when that object's state changes.
    // I.e. when the state of the 'course' array changes (when we add or delete courses in the
    // array) then we want to RE-render() the array to reflect the latest changes. This is
    // an advancement for single page applications because instead of navigating to another page
    // or re-rendering the whole page we only re-render the objects' who's state has changed.
    // So we're updating only a small portion of page -- which save us time and the user's
    // experience isn't as laggy.
    // state = {
    //     courses: [], // array of courses
    //     courseBeingEdited: {}
    // };

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

    /*
    this.setState(prevState =>({ courses: prevState.courses.filter(c => c._id !== course._id) }) )
    setState -- queues for the changes that will be re-rendered
    this.setState(prevState =>({ courses: prevState.courses.filter(c => c._id !== course._id) } )
            -- takes the previous state (the state of the array of courses before we apply the changes)
            then we filter our the want to delete (course._id)

    SERVICES -- with remote server
     deleteCourseService(course._id) -- call CourseServices.js to go to the remote server and delete the give course._id
     .then -- come back and update our local 'courses' array
     this.setState -- will then re re-render the local 'courses' array without the deleted 'course._id'
    */
    // deleteCourse = (course) => {
    //     console.log("delete course");
    //     console.log(course);
    //     console.log(course._id);
    //     deleteCourse(course._id)
    //         .then(status => this.setState(prevState =>({
    //                                           courses: prevState.courses.filter(c => c._id !== course._id)
    //                                       })
    //         ))
    //         .catch(error => {
    //
    //         })
    // };

    // addCourse = () => {
    //     // creating a new table data row
    //     const newCourse = {
    //         title: "New Course",
    //         owner: "me",
    //         modified: (new Date()).toDateString() // Date returns as an object so you can't print an object -- you have to stringify it
    //     };
    //
    //     // calling the remote server here.
    //     // .THEN updating the local state variable 'courses'
    //     // this.setState -- will recognize that the 'courses' have been updated and re-render the component\
    //     createCourse(newCourse)
    //         .then(actualCourse => this.setState(prevState => ({
    //             // ...prevState.courses  -- .clone() the previous state of courses
    //             // then append the new course ('actualCourse') to the list of previous courses
    //             courses: [
    //                 ...prevState.courses, actualCourse
    //             ]
    //         })))
    // };

    // // function calls changes the state -- to recognize that the selected course is being edited
    // editCourse = (course) => {
    //     this.setState({
    //                       courseBeingEdited: course
    //                   })
    // };

    // Render() is the only required function from the inherited parent React.Component
    render() {
        console.log("render()");
        return (
            <div>
                 {/*<div className={"row wbdv-courses-header"}>*/}
                 {/*    <div>*/}
                 {/*        <i id={"wbdv-hamburger"} className="fa fa-bars fa-2x" aria-hidden="true"></i>*/}
                 {/*    </div>*/}
                 {/*    /!* We we receiving parameters as 'properties' or 'props' when the class gets called *!/*/}
                 {/*    /!* in index.js . *!/*/}
                 {/*    <h1>Course List </h1>*/}
                 {/*</div>*/}

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
                        this.props.courses.map(course =>
                                                   <CourseRowComponent
                                                       courseBeingEdited={this.state.courseBeingEdited}
                                                       editCourse={this.props.editCourse}
                                                       deleteCourse={this.props.deleteCourse}
                                                       course={course}/>
                        )
                    }
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


// Jose's Version
// import React from "react";
// import CourseRowComponent from "./CourseRowComponent";
// import {findAllCourses, updateCourse, deleteCourse, createCourse} from "../services/CourseService";
//
// class CourseListComponent extends React.Component {
//
//     state = {
//         courses: [],
//         courseBeingEdited: {}
//     }
//
//     componentDidMount() {
//         findAllCourses()
//             .then(courses => {
//                 this.setState({
//                                   courses: courses
//                               })
//             })
//     }
//
//     deleteCourse = (course) => {
//         deleteCourse(course._id)
//             .then(status => this.setState(prevState =>({
//                                               courses: prevState.courses.filter(c => c._id !== course._id)
//                                           })
//             ))
//             .catch(error => {
//
//             })
//     }
//
//     addCourse = () => {
//         const newCourse = {
//             title: "New Course",
//             owner: "me",
//             modified: (new Date()).toDateString()
//         }
//
//         createCourse(newCourse)
//             .then(actualCourse => this.setState(prevState => ({
//                 courses: [
//                     ...prevState.courses, actualCourse
//                 ]
//             })))
//     }
//
//     editCourse = (course) => {
//         this.setState({
//                           courseBeingEdited: course
//                       })
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Course List (For {this.props.instructor}) {this.props.term}</h1>
//                 <table className="table">
//                     {
//                         this.state.courses.map(course =>
//                                                    <CourseRowComponent
//                                                        courseBeingEdited={this.state.courseBeingEdited}
//                                                        editCourse={this.editCourse}
//                                                        deleteCourse={this.deleteCourse}
//                                                        course={course}
//                                                    />
//                         )
//                     }
//                 </table>
//                 <button
//                     onClick={this.addCourse}
//                     className="btn btn-success">
//                     Add Course
//                 </button>
//             </div>
//         );
//     }
// }
//
// export default CourseListComponent
//
