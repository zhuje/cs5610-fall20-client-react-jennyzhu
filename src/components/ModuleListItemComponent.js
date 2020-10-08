
import React from 'react';
// import '../.../bootstrap/.../bootstrap.css';

export default class ModuleListItemComponent extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <li className="list-group-item">
                {this.props.title}
                <span className={"float-right"}>
                        <i className="fa fa-trash"></i>
                        <i className="fa fa-pencil"></i>
                    </span>
            </li>
        );
    }
}