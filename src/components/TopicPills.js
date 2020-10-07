import React from "react";
import "./course-editor.style.client.css"

export default class TopicPills extends React.Component {
    render() {
        return(
            <ul class="nav nav-pills wbdv-topic-pills ">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Topic 1</a>
                </li>
                <li class="nav-item wbdv-topic-pills ">
                    <a class="nav-link" href="#">Topic 2</a>
                </li>
            </ul>);
    }
}