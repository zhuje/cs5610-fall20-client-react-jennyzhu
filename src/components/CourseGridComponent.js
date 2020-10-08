import React from "react"; // React is a web framework for UI components.
import CourseRowComponent from "./CourseRowComponent";
import {findAllCourses, updateCourse, deleteCourse, createCourse} from "../services/CourseService";
import './StyleCourseListComponent.css';
import CourseCardComponent from "./CourseCardComponent";
import { Container, Row, Col } from "reactstrap";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import "./StyleCourseCard.css"


import "font-awesome/css/font-awesome.css"


// Declare the class which extends React.Component
class CourseGridComponent extends React.Component {

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
        console.log("component did mount");
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

            <div className={"container "}>

                <span  className={"row"}>
                    <div className={"wbdv-header-doc d-none d-lg-table-cell"}> Recent Documents </div>
                    <div className={"wbdv-button-spacing wbdv-header-owner d-none d-lg-table-cell"}> Owned By Me </div>
                    <div className={"wbdv-header-buttons"}>
                        <a href={"#"} className={"wbdv-grid-heading"}>
                            <i className="fas fa-sort-alpha-down "></i>
                        </a>
                        <Link to={`/courses`} className={"wbdv-grid-heading"} >
                            <i className="fas fa-list-ul "></i>
                        </Link>
                        <a href={"#"} className={"wbdv-grid-heading"}  >
                            <i className="fas fa-folder "></i>
                        </a>
                    </div>
                </span>



                <Container >
                    <Row >
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
                                                   // <Col xs="3">
                                                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                                   <CourseCardComponent
                                                       courseBeingEdited={this.state.courseBeingEdited}
                                                       editCourse={this.props.editCourse}
                                                       deleteCourse={this.props.deleteCourse}
                                                       course={course}
                                                       />
                                                    {/*// </Col>*/}
                                                    </div>
                        )
                    }
                    </Row>
                </Container>


                {/* Sticky bottom plus button */}
                <a href="#"
                    onClick={this.props.addCourse} // when the 'Add Course' button is clicked call the 'addCourse' function
                    >
                    <i className="fa fa-plus-circle pull-right fa-3x wbdv-add-course-button wbdv-sticky-add-course-button "
                       aria-hidden="true"></i>
                    {/*Add Course*/}
                </a>

            </div>
        )
    }
}

export default CourseGridComponent