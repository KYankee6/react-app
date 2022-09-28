import {Component} from "react";
import {Button, ButtonGroup} from "reactstrap";

class ReactstrapButtonGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {number: 10}
    }

    move = (type) => {
        if (type == '-') this.setState({number: this.state.number - 1})
        else if (type == '+') this.setState({number: this.state.number + 1})
    }

    render() {
        return (
            <div>
                <ButtonGroup style={{padding: "0px"}}>
                    <Button onClick={e => this.move("-")}>-</Button>
                    <Button onClick={e => this.move("+")}>+</Button>
                </ButtonGroup> <br/>
                {this.state.number}
                <Button color={"primary"}>blue</Button>
                <Button color={"info"}>info</Button>
                <Button color={"success"}>green</Button>
                <Button color={"warning"}>yello</Button>
                <Button color={"danger"}>red</Button>
                <Button color={"dark"}>darkgray</Button>
                <Button color={"secondary"}>gray</Button>
                <Button color={"light"}>white</Button>

            </div>
        );
    }

}

export default ReactstrapButtonGroup;