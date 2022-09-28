import {Component} from "react";
import datatype from 'prop-types';

class PropsEx extends Component {
    render() {
        let {String, Number, Boolean, Array, ObjectJson, Function} = this.props;
        let props_value = this.props.props_val;
        let props_String = this.props.String;
        return (
            <div style={{padding: "0px"}}>
                {props_value}
                <p>String prop : {String}</p>
                <p>Number prop : {Number}</p>
                <p>Boolean prop : {Boolean.toString()}</p>
                <p>Array prop : {Array.toString()}</p>
                <p>ObjectJson prop : {JSON.stringify(ObjectJson)}</p>
                <p>Function prop : {Function}</p>


            </div>
        );
    }
}

PropsEx.propTypes = {
    String: datatype.string,
    Number: datatype.number,
    Boolean: datatype.bool,
    Array: datatype.array,
    ObjectJson: datatype.object,
    Function: datatype.func,
}
export default PropsEx;