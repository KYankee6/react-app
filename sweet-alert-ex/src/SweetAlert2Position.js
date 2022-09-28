import {Component} from "react";
import Swal from "sweetalert2";

class SweetAlert2Position extends Component {
    saveAlert = (flag, positionFlag,icon, e) => {
        Swal.fire({
            position: positionFlag,
            icon: icon,
            title: flag + '되었습니다.',
            showConfirmButton:false,
            timer: 1500,
        });
    };

    render() {
        return (
            <div>
                <h1>sweetalert2</h1>
                <button onClick={e => this.saveAlert('저장', 'center','success')}>저장</button>
                <button onClick={e => this.saveAlert('수정', 'bottom-end','question')}>취소</button>
            </div>
        );
    }
}

export default SweetAlert2Position;