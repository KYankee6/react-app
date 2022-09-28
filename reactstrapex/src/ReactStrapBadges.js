import {Component} from "react";
import {Badge, Button} from "reactstrap";

class ReactStrapBadges extends Component {
    render() {
        return (
            <div>
                <h1>PRODUCT NAME <Badge color={"secondary"}>hit</Badge></h1>
                <Button color={"light"} outline>
                    Accessor <Badge color={"dark"}>4</Badge>
                </Button>
                <Badge color={"danger"}>pill</Badge>
                <Badge href="http://example.com" color={"light"}>Golink</Badge>

            </div>
        );
    }
}

export default ReactStrapBadges;