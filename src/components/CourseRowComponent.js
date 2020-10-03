import React from "react";

const CourseRowComponent = ({course, deleteCourse, editCourse, courseBeingEdited}) =>
    <tr>
        <td>
            {
                // if this is the course being edited -- then render the form
                course === courseBeingEdited  && // while being rendered if the course being rendered is the courseBeingEdited then.. (&&)
                <input // create an input field
                    className="form-control" // styling with REACT
                    value={courseBeingEdited.title}/> // set the input field value to the 'title' of the course you selected

            }
            {
                // else if this is not the course being edited just show the title
                course !== courseBeingEdited &&
                <label>{course.title}</label>
            }
        </td>
        <td>{course.owner}</td>
        <td>{course.modified}</td>
        <td>
            <button
                onClick={() => deleteCourse(course) }
                className="btn btn-danger">
                Delete
            </button>
            <button
                onClick={() => editCourse(course)}
                className="btn btn-primary">
                Edit
            </button>
        </td>
    </tr>;

export default CourseRowComponent