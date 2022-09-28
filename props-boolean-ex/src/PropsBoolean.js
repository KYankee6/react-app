import {Component} from "react";
import React from "react";
import PropsObject from "./PropsObject";
class PropsBoolean extends Component {
    render() {
        let {BooleanTrueFalse}
            = this.props;

        return (
            <div style={{padding: "0px"}}>
                {BooleanTrueFalse ? '2.' : '1.'}
                {BooleanTrueFalse.toString()}
            </div>
        );
    }

}

export default PropsBoolean;