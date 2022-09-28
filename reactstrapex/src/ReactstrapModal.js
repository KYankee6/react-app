import {Component} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

class ReactstrapModal extends Component {
    constructor(props) {
        super(props);
        this.state = {modal: false}
    }

    toggle = () => {
        this.setState({modal: !this.state.modal})
    }

    render() {
        return (
            <div>
                <Button color={"warning"} onClick={this.toggle}>Modal 버튼</Button>
                <Modal isOpen={this.state.modal} fade={true} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        계좌 개설
                    </ModalHeader>
                    <ModalBody>
                        계좌개설 과정에 오류가 발생하였습니다
                    </ModalBody>
                    <ModalFooter>
                        <Button color={"primary"} onClick={this.toggle}>확인</Button>
                        <Button color={"secondary"} onClick={this.toggle}>취소</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }

}

export default ReactstrapModal