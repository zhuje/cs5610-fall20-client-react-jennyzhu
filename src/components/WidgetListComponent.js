import React from "react";
import {Button} from "react-bootstrap";
import "./course-editor.style.client.css"

export default class WidgetListComponent extends React.Component {
    render() {
        return  (

            <div className="wbdv-light-gray-border overflow-auto wbdv-widget-container">

                <div className="row  wbdv-widget-save-preview ">
                    <Button className="btn btn-success wbdv-widget-save-button">
                        Save
                    </Button>
                    <div className="wbdb-preview-switch ">

                        <div className='custom-control custom-switch'>
                            <input
                                type='checkbox'
                                className='custom-control-input'
                                id='customSwitches'
                                readOnly
                            />
                            <label className='custom-control-label' htmlFor='customSwitches'>
                                Preview
                            </label>
                        </div>
                    </div>
                </div>


                <h3>
                    Heading Widget
                    <span className="pull-right wbdv-widget-heading-button">
                            <a href="#" className="btn  wbdv-widget-heading-button-nudge">
                                <i className="fa fa-arrow-up"></i>
                            </a>
                            <a href="#" className="btn  wbdv-widget-heading-button-nudge">
                                <i className="fa fa-arrow-down"></i>
                            </a>

                                <select className={"wbdv-widget-heading-button-nudge"}>
                                    <option>Heading</option>
                                    <option>YouTube</option>
                                    <option>Slides</option>
                                    <option>Image</option>
                                    <option>List</option>
                                </select>

                            <a href="#" className="btn  wbdv-widget-heading-button-nudge">
                                <i className="fa fa-trash"></i>
                            </a>
                        </span>
                </h3>

                {/*// <!-- Widget Editor: Input fields -->*/}
                <input className="form-control wbdv-widget-input" placeholder="Heading Text"/>
                <select className="form-control wbdv-widget-input">
                    <option>Heading 1</option>
                    <option>Heading 2</option>
                    <option>Heading 3</option>
                    <option>Heading 4</option>
                    <option>Heading 5</option>
                    <option>Heading 6</option>
                </select>
                <input className="form-control wbdv-widget-input" placeholder="Widget Name"/>
                <h3> Preview </h3>
                <h2> Heading Text </h2>
            </div>


        )
    }
}