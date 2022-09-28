import {Component} from "react";

class BootstrapCard extends Component {
    render() {
        return (
            <>
                <div className="card" style={{width:"500px"}}>
                    <img className="card-img-top" src="https://random.imagecdn.app/500/150" alt="Card image"/>
                    <div className="card-img-overlay">
                        <h4 className="card-title">John Doe</h4>
                        <p className="card-text">Some example text.</p>
                        <a href="bootstrap-ex/src/BootstrapCard#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
            </>
        );
    }
}

export default BootstrapCard