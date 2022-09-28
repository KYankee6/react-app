import {Component} from "react";
import {Alert, UncontrolledAlert} from "reactstrap";

class ReactStrapAlert extends Component {
    render() {
        return (
            <div>
                {/*{color: secondary,success, danges, info, light dark}*/}
                <Alert color="dark">
                    Simple Alert[color:dark]
                </Alert>
                <UncontrolledAlert color="warning">
                    UncontrolledAlert [color:warning]
                </UncontrolledAlert>
            </div>
        );
    }
}

export default ReactStrapAlert;
