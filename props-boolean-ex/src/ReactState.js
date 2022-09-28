import React, {Component} from "react";

class ReactState extends Component {
    constructor(props) {
        super(props);
        // 지역 변수가 아니다.
        // 계속 들고다니는 녀석.
        this.state={
            StateString: this.props.reactString,
            StateNumber: 200,

        }
    }

    render() {
        return (
            <div style={{padding: "0px"}}>
                {this.state.StateString}
                {this.state.StateNumber}
            </div>
        );
    }
}

export default ReactState;