import logo from './logo.svg';
import './App.css';
import SweetAlert2Basic from "./SweetAlert2Basic";
import SweetAlert2Position from "./SweetAlert2Position";
import SweetAlert2Confirm from "./SweetAlert2Confirm";

function App() {
    return (
        <>
            <h1>Start Sweet Alert</h1>
            <SweetAlert2Basic/>
            <SweetAlert2Position/>
            <SweetAlert2Confirm/>
        </>
    );
}

export default App;
