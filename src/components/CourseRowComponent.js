// import React from "react";
//
// const CourseRowComponent = ({course, deleteCourse, editCourse, courseBeingEdited}) =>
//     <tr>
//         <td>
//             {
//                 // if this is the course being edited -- then render the form
//                 course === courseBeingEdited  && // while being rendered if the course being rendered is the courseBeingEdited then.. (&&)
//                 <input // create an input field
//                     className="form-control" // styling with REACT
//                     value={courseBeingEdited.title}/> // set the input field value to the 'title' of the course you selected
//
//             }
//             {
//                 // else if this is not the course being edited just show the title
//                 course !== courseBeingEdited &&
//                 <label>{course.title}</label>
//             }
//         </td>
//         <td>{course.owner}</td>
//         <td>{course.modified}</td>
//         <td>
//             <button
//                 onClick={() => deleteCourse(course) }
//                 className="btn btn-danger">
//                 Delete
//             </button>
//             <button
//                 onClick={() => editCourse(course)}
//                 className="btn btn-primary">
//                 Edit
//             </button>
//         </td>
//     </tr>;
//
// export default CourseRowComponent


import React from "react";
import {updateCourse} from "../services/CourseService";
import './StyleCourseListComponent.css';


class CourseRowComponent extends React.Component {
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
        return (
            <tr>
                <td>
                    {
                        this.state.editing === true &&
                        <input
                            onChange={this.updateTitle}
                            value={this.state.course.title}/>
                    }
                    {
                        this.state.editing === false &&
                        <label>
                            <i className="fas fa-file-alt wbdv-button-spacing"></i>
                            {this.state.course.title}
                        </label>
                    }
                </td>
                <td>{this.props.course.owner}</td>
                <td>{this.props.course.modified}</td>
                <td>
                    <button
                        className="btn btn-danger "
                        onClick={() => this.props.deleteCourse(this.props.course)}>
                        Delete
                    </button>
                    {
                        this.state.editing &&
                        <button
                            className="btn btn-primary "
                            onClick={this.updateCourse}>
                            Ok
                        </button>
                    }
                    {
                        !this.state.editing &&
                        <button
                            className="btn btn-primary "
                            onClick={() => this.setState({editing: true})}>
                            Edit
                        </button>
                    }
                </td>
            </tr>
        );
    }
}

export default CourseRowComponent