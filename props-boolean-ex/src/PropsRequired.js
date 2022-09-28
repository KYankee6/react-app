import React from "react";
import datatype from "prop-types";
import {Component} from "react";

class PropsRequired extends Component {
    render() {
        let {ReactString, ReactNumber} = this.props
        return (
            <div style={{padding: "0px"}}>
                {ReactString}
                {ReactNumber}
            </div>
        );
    }
}

PropsRequired.propTypes = {
    ReactString: datatype.string.isRequired,
}
PropsRequired.defaultProps = {
    ReactString: "default string",
    ReactNumber: "400",
};
export default PropsRequired;