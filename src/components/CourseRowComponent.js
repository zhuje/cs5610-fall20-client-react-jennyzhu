//
// import React from "react";
// import {updateCourse} from "../services/CourseService";
// import './StyleCourseListComponent.css';
// import {Link} from "react-router-dom";
//
//
//
// class CourseRowComponent extends React.Component {
//     state = {
//         editing: false,
//         courseTitle: "Some Course",
//         course: this.props.course
//     }
//
//     constructor(props) {
//         super(props)
//     }
//
//     updateTitle = (event) => {
//         const newTitle = event.target.value
//         const course = { ...this.state.course }
//         course.title = newTitle
//         this.setState({
//                           course: course
//                       })
//     }
//
//     updateCourse = () => {
//         // debugger
//         this.setState({editing: false})
//         updateCourse(this.state.course._id, this.state.course)
//     }
//
//     render() {
//         return (
//             <tr>
//                 <td>
//                     {
//                         this.state.editing === true &&
//                         <input
//                             onChange={this.updateTitle}
//                             value={this.state.course.title}/>
//                     }
//                     {
//                         this.state.editing === false &&
//                         // <Link>
//                         //     <i className="fas fa-file-alt wbdv-button-spacing"></i>
//                         //     {this.state.course.title}
//                         // </Link>
//                         <Link to={`/edit/${this.props.course._id}`}>{this.props.course.title} {this.props.course._id}</Link>
//
//
//                     }
//                 </td>
//                 <td>{this.props.course.owner}</td>
//                 <td>{this.props.course.modified}</td>
//                 <td>
//                     <button
//                         className="btn btn-danger "
//                         onClick={() => this.props.deleteCourse(this.props.course)}>
//                         Delete
//                     </button>
//                     {
//                         this.state.editing &&
//                         <button
//                             className="btn btn-primary "
//                             onClick={this.updateCourse}>
//                             Ok
//                         </button>
//                     }
//                     {
//                         !this.state.editing &&
//                         <button
//                             className="btn btn-primary "
//                             onClick={() => this.setState({editing: true})}>
//                             Edit
//                         </button>
//                     }
//                 </td>
//             </tr>
//         );
//     }
// }
//
// export default CourseRowComponent

import React from "react";
import {Link} from "react-router-dom";
import {updateCourse} from "../services/CourseService";
import 'bootstrap/dist/css/bootstrap.min.css';


const courseBeingEdited = false
const editCourse = () => {}

export default class CourseRowComponent extends React.Component {
    state = {
        editing: false,
        courseTitle: "Some Course",
        course: this.props.course
    }

    constructor(props) {
        super(props)
    }

    updateTitle = (event) => {
        const newTitle = event.target.value
        const course = { ...this.state.course }
        course.title = newTitle
        this.setState({
                          course: course
                      })
    }

    updateCourse = () => {
        // debugger
        this.setState({editing: false})
        updateCourse(this.state.course._id, this.state.course)
    }





    render() {
        return(
            <tr className={"wbdv-course-row"}>
                <td>
                    {
                        this.state.editing === true &&
                        <input
                            onChange={this.updateTitle}
                            value={this.state.course.title}/>
                    }
                    {
                        this.state.editing === false &&
                        <Link to={`/edit/${this.props.course._id}`}>
                            <i className="fas fa-file-alt wbdv-button-spacing"></i>
                            {this.state.course.title}
                        </Link>
                    }
                </td>
                <td className={".d-sm-none .d-md-block"}> {this.props.course.owner} </td>
                <td classNAme={".d-sm-none .d-md-block"}> {this.props.course.modified} </td>
                <td>
                    <button
                        onClick={() => this.props.deleteCourse(this.props.course)}
                        className="btn btn-danger">
                        Delete
                    </button>
                    {
                        !this.state.editing &&
                        <button
                            className="btn btn-primary "
                            onClick={() => this.setState({editing: true})}>
                            Edit
                        </button>
                    }
                    {
                        this.state.editing &&
                        <button
                            className="btn btn-primary "
                            onClick={this.updateCourse}>
                            Ok
                        </button>
                    }
                </td>
            </tr>
        )
    }
}