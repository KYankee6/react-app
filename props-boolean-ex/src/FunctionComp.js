import {useEffect, useState} from "react";

function FunctionComp(props) {
    let [contents, setContents] = useState('[This is react]');

    useEffect(() => {
        console.log('useEffect');
    });
    return (
        <div style={{padding:"0px"}}>
            <h2>{contents}</h2>
            <button onClick={() => setContents('[This IS HOOK]')}>버튼</button>
        </div>
    )
}

export default FunctionComp;