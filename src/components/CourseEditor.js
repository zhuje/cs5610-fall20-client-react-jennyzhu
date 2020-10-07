import React from "react";
import ModuleListItem from './ModuleListItem';
import ListGroup from 'react-bootstrap/ListGroup';
import "font-awesome/css/font-awesome.css"
import LessonTabs from "./LessonTabs";
import ModuleList from "./ModuleList";
import WidgetList from "./WidgetList";

export default class CourseEditor extends React.Component {
    render() {
        return (
            <div>
                {/* CourseEditor Header */}
                <div className="container ">
                    <h5 className="wbdv-editor-heading ">
                        <div className="row">
                            <div className=" col-xs-3 wbdv-margins-left-right-auto">
                                <h4 className="wbdv-course-title">
                                    <a href="#">
                                        <i className="fa fa-times wbdv-course-editor wbdv-close"
                                           aria-hidden="true"></i>
                                    </a>
                                    &nbsp;
                                    &nbsp;
                                    CS5610 - WebDev
                                </h4>
                            </div>
                            <div
                                className="col-xs-5 d-none d-lg-inline d-print-inline wbdv-margins-left-right-auto ">
                                <ul className="nav nav-pills wbdv-lesson-tabs">
                                    <li className="nav-item"><a className="nav-link"
                                                                href="#"> Build </a></li>
                                    <li className="nav-item"><a className="nav-link active"
                                                                href="#"> Pages </a></li>
                                    <li className="nav-item"><a className="nav-link"
                                                                href="#"> Theme </a></li>
                                    <li className="nav-item"><a className="nav-link"
                                                                href="#"> Store </a></li>
                                    <li className="nav-item"><a className="nav-link" href="#"> Apps </a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link"
                                                                href="#"> Settings </a></li>
                                </ul>
                            </div>
                            <div className="col-xs-1 wbdv-margins-left-right-auto">
                                <a href="#" className="wbdv-lesson-add-btn">
                                    <i className="fa fa-plus fa-2x pull-right wdbv-plus-nudge"
                                       aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </h5>
                </div>

                {/* Side Bar and Widgets */}
                <div className="row">
                    <div className="col-4">
                        <h2>Modules</h2>
                        <ModuleList/>
                    </div>
                    <div className="col-8">
                        <h2>Lessons</h2>
                        <LessonTabs/>
                        <WidgetList/>
                    </div>
                </div>

                {/* Sticky bottom plus button */}
                <a href="#"
                   onClick={this.addCourse} // when the 'Add Course' button is clicked call the 'addCourse' function
                >
                    <i className="fa fa-plus-circle pull-right fa-3x wbdv-add-course-button wbdv-sticky-add-course-button "
                       aria-hidden="true"></i>
                    {/*Add Course*/}
                </a>

            </div>
        );
    }
}