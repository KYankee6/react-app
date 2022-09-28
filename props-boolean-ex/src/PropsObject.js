import {Component} from "react";
import datatype from "prop-types"

class PropsObject extends Component {
    render() {
        let {ObjectJson} = this.props;
        return (
            <div style={{padding: "0px"}}>
                {JSON.stringify(ObjectJson)}
            </div>
        );
    }
}

PropsObject.propTypes={
    ObjectJson: datatype.shape({
        react: datatype.string,
        twohundred: datatype.string,
    })

}

export default PropsObject;