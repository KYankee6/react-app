import React from "react";
import {Component} from "react";

class ReactRef extends Component {
    constructor(props) {
        super(props);
        this.InputRef = React.createRef();
    }

    RefFocus = () => {
        this.InputRef.current.focus();
    }

    JavascriptFocus = () =>{
        document.getElementById('id').focus();
    }

        render() {
        return (
            <>
                <input type="text" id='id' ref={this.InputRef}/>
                <input type="button" value={"Ref Focus"} onClick={this.RefFocus}/>
                <input type="button" value={"Javascript Focus"} onClick={this.JavascriptFocus}/>

            </>
        );
    }

}
export default ReactRef