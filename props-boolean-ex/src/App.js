import './App.css';
import PropsBoolean from "./PropsBoolean";
import PropsObject from "./PropsObject";
import PropsRequired from "./PropsRequired";
import React from "react";
import ReactState from "./ReactState";
import SetStateComp from "./SetStateComp";
import FunctionComp from "./FunctionComp";


function App() {
    return (
        <div>
            <h1>Start React</h1>
            <p>
                HTML 적용
            </p>
            {/*            <PropsBoolean BooleanTrueFalse={false}/>
            <PropsBoolean BooleanTrueFalse/>
            <PropsObject ObjectJson={{react: "리액트", twohundred: '200'}}/>
            <PropsRequired  ReactNumber={200}/>
            <PropsNode>
                <span>
                    node from app
                </span>
            </PropsNode>*/}
            {/*<ReactState reactString={"REACTt String"}/>*/}
            {/*<SetStateComp/>*/}
            <FunctionComp contents={"[This is FunctionComponent]"}/>
        </div>
    );
}

export default App;
