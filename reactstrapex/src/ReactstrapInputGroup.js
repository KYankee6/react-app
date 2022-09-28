import {Component} from "react";
import {Button, Input, InputGroup, InputGroupText, InputGroupAddon} from "reactstrap";

class ReactstrapInputGroup extends Component {
    render() {
        return (
            <div>
                <InputGroup>
                    <Input placeholder={'userid'}>
                        <InputGroupText>@reactmail.com</InputGroupText>
                    </Input>
                </InputGroup>
                <InputGroup>
                    <Button>버튼</Button>
                    <Input/>
                </InputGroup>
            </div>
        );
    }
}

export default ReactstrapInputGroup;