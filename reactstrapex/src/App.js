import logo from './logo.svg';
import './App.css';
import ReactStrapAlert from "./ReactStrapAlert";
import 'bootstrap/dist/css/bootstrap.css';
import ReactStrapBadges from "./ReactStrapBadges";
import ReactstrapDropdown from "./ReactstrapDropdown";
import ReactstrapButtonGroup from "./ReactstrapButtonGroup";
import ReactstrapCarousel from "./ReactstrapCarousel";
import ReactstrapCollapses from "./ReactstrapCollapses";
import ReactstrapFade from "./ReactstrapFade";
import ReactRef from "./ReactRef";
import ReactstrapForm from "./ReactstrapForm";
import ReactstrapInputGroup from "./ReactstrapInputGroup";
import ReactstrapListGroup from "./ReactstrapListGroup";
import ReactstrapModal from "./ReactstrapModal";
import ReactstrapNavbar from "./ReactstrapNavbar";
import ReactstrapTable from "./ReactstrapTable";
import ReactstrapTab from "./ReactstrapTab";

function App() {
    return (
        <div>
            <h1>React Start</h1>
            <p>CSS 적용하기</p>
            <ReactstrapNavbar/>
            {/*<ReactStrapAlert/>*/}
            {/*<ReactStrapBadges/>*/}
            {/*<ReactStrapAlert/>*/}
            <ReactstrapDropdown/>
            <ReactstrapButtonGroup/>
            <ReactstrapCarousel/>
            <ReactstrapCollapses/>
            <ReactstrapFade/>
            <ReactRef/>
            <ReactstrapForm/>
            <ReactstrapInputGroup/>
            <ReactstrapListGroup/>
            <ReactstrapModal/>
            <ReactstrapTable/>
            <ReactstrapTab/>
        </div>
    );
}

export default App;
