import './App.css';
import {Route, Routes} from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import BankInfo from "./BankInfo";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <div className={'App'}>
            <Header/>
            <Routes>
                <Route exact path={"/"} element={<Main/>}/>
                <Route exact path={"/BankInfo"} element={<BankInfo/>}/>
                {/*<Route exact path={"/MakeAccount"} element={<MakeAccount/>}/>*/}
                {/*<Route exact path={"/Deposit"} element={<Deposit/>}/>*/}
                {/*<Route exact path={"/Withdraw"} element={<Withdraw/>}/>*/}
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
