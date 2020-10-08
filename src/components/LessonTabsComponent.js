import React from "react";
import TopicPillsComponent from "./TopicPillsComponent";

export default class LessonTabsComponent extends React.Component {
    render() {
        return(
            <div>


                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active wbdv-lesson-tab-link" href="#">Active Tab</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wbdv-lesson-tab-link" href="#">Another Tab</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link wbdv-lesson-tab-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled wbdv-lesson-tab-link" href="#">Disabled</a>
                    </li>
                </ul>

                <TopicPillsComponent/>


            </div>
        );
    }
}