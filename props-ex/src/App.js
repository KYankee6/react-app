import logo from './logo.svg';
import './App.css';
import PropsEx from "./PropsEx";

function App() {
    return (
        <div>
            <h1>start reaccct1</h1>
            <p>HTML 적용</p>
            <PropsEx String="react"
                     Number={200}
                     Boolean={1 == 1}
                     Array={[1, 2, 3, 4]}
                     ObjectJson={{"cat": "meow"}}
                     Function={console.log("Meww")}/>
        </div>
    );
}

export default App;
