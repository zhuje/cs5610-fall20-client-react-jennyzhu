import React from "react";
import ModuleListItem from './ModuleListItem';
import ListGroup from 'react-bootstrap/ListGroup';
import "font-awesome/css/font-awesome.css"
import LessonTabs from "./LessonTabs";

export default class ModuleList extends React.Component {
    // Render modules dynamically from an array called 'modules'.
    //    Create a constructor containing the array 'modules'
    //     which has state.
    constructor(){
        super();
        this.state = {
            module: {title:""},
            modules: [
                {title: 'Module 1 - jQuery', id: 123},
                {title: 'Module 2 - React', id: 234},
                {title: 'Module 3 - Redux', id: 345},
                {title: 'Module 4 - Angular', id: 456},
                {title: 'Module 5 - Node.js', id: 567},
                {title: 'Module 6 - MongoDB', id: 678},
            ]
        };
        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
    }

    titleChanged(event){
        this.setState({module: {title: event.target.value}});
    }

    createModule(){
        console.log(this.state.module);
    }

    // Build the List dynamically.
    // Using the .map function to
    // iterate through the the array 'modules' and passing the
    // title of each parameter ( title={module.title} ) along with
    // id ( key={module.id} ).
    renderListOfModules() {
        let modules =
            this.state.modules.map(function(module)
                 { return <ModuleListItem
                                title = {module.title}
                                key = {module.id}/>
                 }
                 );
        return modules;
    }
    // Now we can replace the hard coded modules with the
    // dynamically rendered 'modules'.
    render() {
        return (
            <div>
                <input
                    className={"form-control"}
                    placeholder ={"title"}
                    onChange={this.titleChanged}
                    value = {this.state.module.title}
                />

                <button
                    onClick={this.createModule}
                    className={"btn btn-primary btn-block"}>
                    <i className={"fa fa-plus"}></i>
                </button>

                <ul className="list-group">
                     { this.renderListOfModules() }
                </ul>
            </div>
        );
    }
}
