import {Component} from "react";
import {ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";

class ReactstrapDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        }
    }

    toggle = (e) => {
        this.setState({dropdownOpen: !this.dropdownOpen})
    }

    render() {
        return (
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>버튼 Drpo down</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header> 헤더 </DropdownItem>
                        <DropdownItem disabled> 비활성홥 버튼</DropdownItem>
                        <a href="http://example.com">
                            <DropdownItem>example 사이트로 이동</DropdownItem>
                        </a>
                        <DropdownItem onClick={e => alert("Aleart")}>Alert 버튼</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
        );
    }
}

export default ReactstrapDropdown;