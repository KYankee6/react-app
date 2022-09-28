import {Component} from "react";

class SetStateComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StateString: 'rrreact',

        }
    }

    render() {
        return (
            <div style={{padding: "0px"}}>
                <button onClick={(e) => this.SetChagne('direct', e)}> state 직접 변경</button>
                <button onClick={(e) => this.SetChagne('setstate', e)}> setState로 변경</button>
                <br/>
                [State 변경] StateString: {this.state.StateString}
            </div>
        );
    }

    SetChagne = (flag) => {
        if (flag == 'direct') {
            // 직접 변경 (안된다)
            this.state.StateString = '리액트 다이렉트'
        } else if (flag == 'setstate') {
            //간접 변경 (된다)
            this.setState({StateString: '리액트 셋스테이트'})
        }

    };
}

export default SetStateComp;