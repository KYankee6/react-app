import { Component } from "react";

class LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log("2.getDrivedStateFromProps call");
        return { tmp_state: "props_val" };
    }
    constructor(props) {
        super(props);
        this.state = {this.props.prop_value};
        console.log("1.constructor call");
    }

    componentDidMount() {
        console.log("4.componentDidMount Call");
        console.log(this.state.tmp_state);
        this.setState({ tmp_state2: true });
    }

    shouldComponentUpdate(props, state) {
        console.log("3.shouldComponentUpdate");
        return state.tmp_state2;
    }
    render() {
        console.log("render call");
        return <h3>{this.state.tmp_state}</h3>;
    }
}

export default LifecycleEx;