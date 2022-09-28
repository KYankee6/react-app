import {Component} from "react";
import {Button, Card, CardBody, UncontrolledCollapse} from "reactstrap";

class ReactstrapCollapses extends Component {
    render() {
        return (
            <div>
                <Button color={"primary"} id={"toggle"}>Click me</Button>
                <UncontrolledCollapse toggler={'#toggle'}>
                    <Card>
                        <CardBody>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolore, doloribus,
                            eaque, eligendi facilis harum ipsam maxime obcaecati officiis pariatur provident quisquam
                            repudiandae vero. Asperiores corporis laboriosam maxime nesciunt ut!
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>

            </div>
        );
    }
}

export default ReactstrapCollapses;
