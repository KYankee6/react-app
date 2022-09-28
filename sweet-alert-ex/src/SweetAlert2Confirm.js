import {Component} from "react";
import Swal from "sweetalert2";

class SweetAlert2Confirm extends Component {
    deleteAlert = (e) => {
        Swal.fire({
            title: '정말 삭제하겠습니까?',
            icon: 'question?',
            showCancelButton: true,
            confirmButtonColor: '#4B088A',
            confirmButtonText: '예',
            cancelButtonText: '아니오',
        }).then((result) => {
            console.log(result)
            if (result.value) {
                document.getElementById('deleteID').remove();
                Swal.fire('Delete', 'sweetalert2 삭제완료', 'success')
            }
        });
    }


    render() {
        return (
            <div>
                <h1 id='deleteID'>sweetalert2</h1>
                <button onClick={e => this.deleteAlert(e)}>삭제</button>
            </div>
        );
    }
}

export default SweetAlert2Confirm;