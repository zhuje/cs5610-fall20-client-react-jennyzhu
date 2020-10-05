import React from 'react';
import CourseCards from './CourseCards';

export default class WhiteBoard extends React.Component {
    render() { return (
        <div className="container-fluid">
            <h1>WhiteBoard</h1>
            <div className={"card-deck"}>
                <CourseCards/>
                <CourseCards/>
            </div>
        </div>
    )}}