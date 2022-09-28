import {Component} from "react";
import swal from "sweetalert2";

class SweetAlert2Basic extends Component {
    componentDidMount() {
        swal.fire('1.Sweet Alert').then(r => alert('2. SweetAlert value: '+r.value ));
    }

    render() {
        return (
            <div>
                <h1>Sweetalert2</h1>
            </div>
        );
    }
}

export default SweetAlert2Basic