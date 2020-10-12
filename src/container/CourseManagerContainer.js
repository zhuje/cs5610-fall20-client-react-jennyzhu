import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import CourseGridComponent from "../components/CourseGridComponent";
import {findAllCourses, updateCourse, deleteCourse, createCourse} from "../services/CourseService";



export default class CourseManagerContainer extends React.Component{
    // We declare what objects we want to pay attention to when that object's state changes.
    // I.e. when the state of the 'course' array changes (when we add or delete courses in the
    // array) then we want to RE-render() the array to reflect the latest changes. This is
    // an advancement for single page applications because instead of navigating to another page
    // or re-rendering the whole page we only re-render the objects' who's state has changed.
    // So we're updating only a small portion of page -- which save us time and the user's
    // experience isn't as laggy.
    state = {
        courses: [], // array of courses
        courseBeingEdited: {}
    };

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
        console.log("component did mountManager");
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
    deleteCourse = (course) => {
        deleteCourse(course._id)
            .then(status => this.setState(prevState =>({
                                              courses: prevState.courses.filter(c => c._id !== course._id)
                                          })
            ))
            .catch(error => {

            })

    };

    addCourse = () => {
        // creating a new table data row
        const newCourse = {
            title: "New Course",
            owner: "me",
            modified: (new Date()).toDateString() // Date returns as an object so you can't print an object -- you have to stringify it
        };

        // calling the remote server here.
        // .THEN updating the local state variable 'courses'
        // this.setState -- will recognize that the 'courses' have been updated and re-render the component\
        createCourse(newCourse)
            .then(actualCourse => this.setState(prevState => ({
                // ...prevState.courses  -- .clone() the previous state of courses
                // then append the new course ('actualCourse') to the list of previous courses
                courses: [
                    ...prevState.courses, actualCourse
                ]
            })))
    };

    // function calls changes the state -- to recognize that the selected course is being edited
    editCourse = (course) => {
        this.setState({
                          courseBeingEdited: course
                      })
    };





    render(){
        return (

            <div>

                <div className={"row wbdv-courses-header "}>
                    <div>
                        <i id={"wbdv-hamburger"} className="fa fa-bars fa-2x" aria-hidden="true"></i>
                    </div>
                    {/* We we receiving parameters as 'properties' or 'props' when the class gets called */}
                    {/* in index.js . */}
                    <h1> Course Manager </h1>
                </div>


                {
                    this.props.type === "Table" &&
                    <CourseTableComponent
                        deleteCourse={this.deleteCourse}
                        addCourse={this.addCourse}
                        editCourse={this.editCourse}
                        courses={this.state.courses}
                        courseBeingEdited={this.state.courseBeingEdited}
                    />
                }
                {
                    this.props.type === "Grid" &&
                    <CourseGridComponent
                        deleteCourse={this.deleteCourse}
                        addCourse={this.addCourse}
                        editCourse={this.editCourse}
                        courses={this.state.courses}
                        courseBeingEdited={this.state.courseBeingEdited}
                    />
                }
            </div>

        )
    }
}