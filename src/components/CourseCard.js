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
import {Link} from "react-router-dom";


class CourseCard extends React.Component {
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
            // <tr>
            //     <td>
            //         {
            //             this.state.editing === true &&
            //             <input
            //                 onChange={this.updateTitle}
            //                 value={this.state.course.title}/>
            //         }
            //         {
            //             this.state.editing === false &&
            //             <label>
            //                 <i className="fas fa-file-alt wbdv-button-spacing"></i>
            //                 {this.state.course.title}
            //             </label>
            //         }
            //     </td>
            //     <td>{this.props.course.owner}</td>
            //     <td>{this.props.course.modified}</td>
            //     <td>
            //         <button
            //             className="btn btn-danger "
            //             onClick={() => this.props.deleteCourse(this.props.course)}>
            //             Delete
            //         </button>
            //         {
            //             this.state.editing &&
            //             <button
            //                 className="btn btn-primary "
            //                 onClick={this.updateCourse}>
            //                 Ok
            //             </button>
            //         }
            //         {
            //             !this.state.editing &&
            //             <button
            //                 className="btn btn-primary "
            //                 onClick={() => this.setState({editing: true})}>
            //                 Edit
            //             </button>
            //         }
            //     </td>
            //
            //     <td>
                    <div className={"card wbdv-card "} >
                        <img className={"card-img-top"} src={"https://i.imgflip.com/2c4ilx.jpg"} alt={"Card image cap"}/>
                        <div className={"card-body"}>
                            <h5 className={"card-title"}>
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
                            </h5>
                            {/*<h5 className={"card-title"}> {this.state.course.title}  </h5>*/}
                            <div className={"wbdv-card-text"}> Modified :  {this.props.course.modified} </div>
                            <div className={"wbdv-card-text"}> Owner : {this.props.course.owner} </div>
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




                        </div>
                    </div>



            //     </td>
            //
            // </tr>


            // <div className="card" style="width: 18rem;">
            //     <img className="card-img-top" src="..." alt="Card image cap"/>
            //     <div className="card-body">
            //         <h5 className="card-title"> {this.state.course.title} </h5>
            //         <h5 className="card-title"> {this.props.course.owner} </h5>
            //         <h5 className="card-title"> {this.props.course.modified} </h5>
            //         <p className="card-text">Some quick example text to build on the card title
            //             and make up the bulk of the card's content.</p>
            //         <a href="#" className="btn btn-primary">Go somewhere</a>
            //     </div>
            // </div>




        );
    }
}

export default CourseCard