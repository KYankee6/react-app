import {Badge, ListGroup, ListGroupItem} from "reactstrap";
import {Component} from "react";

class ReactstrapListGroup extends Component {
    render() {
        return (
            <div>
                <ListGroup>
                    <ListGroupItem color={'danger'} className={'justify-content'}>
                        Badge<Badge pill>200</Badge>
                    </ListGroupItem>
                    <ListGroupItem disabled tag={'a'} href={'#'}>Disabled</ListGroupItem>
                    <ListGroupItem tag={'a'} href={'https://naver.com'}>Link</ListGroupItem>
                    <ListGroupItem tab={'button'} action onClick={e => alert("button")}>Link</ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default ReactstrapListGroup
