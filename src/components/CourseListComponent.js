import React from "react";
import CourseRowComponent from "./CourseRowComponent";

// Create an array.
const courses = [
    {
        _id:"123",
        title: "CS5610",
        owner: "me",
        lastOpened: "yesterday"
    },
    {
        _id:"234",
        title: "CS4450",
        owner: "me",
        lastOpened: "yesterday"
    },
    {
        _id:"567",
        title: "CS5200",
        owner: "me",
        lastOpened: "yesterday"
    }
];


// ES5 syntax
// function CourseListComponent(){
//     return (
//         <h1> Course List </h1>
//     )
// }


// ES6 syntax
// In general the curly brackets 'escape the html' and this declares javaScript injections.
// The "{}" within the function signature is called the 'destructor' is takes in your parameters.
// The 'return' is implied .
// The body of the function HAS TO be wrapped in a div because
// in ES6 we're expected to only return 1 thing.
const CourseListComponent = ({instructor,term }) =>
    <div>
        <h1> Course List (For {instructor}, {term}) </h1>
        <table className="table">

            {/*// '.map()' Allows you to iterate over the array 'courses[]' */}
            {
                courses.map(item =>
                    <CourseRowComponent item={item}/>
                )
            }
        </table>
    </div>;
export default CourseListComponent;