import {Component} from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";

class ReactstrapNavbar extends Component {

    constructor(props) {
        super(props);
        this.state = {collapsed: false}
    }

    toggle = () => {
        this.setState({collapsed: !this.state.collapsed})
    }

    render() {
        return (
            <div>
                <Navbar color={"faded"} light fixed={'top'} style={{position:"sticky"}} expand={'lg'} variant='dark'>
                    <NavbarBrand href={"/"} className={"mr-auto"}>Navbar</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} className={"mr-2"}/>
                    <Collapse isOpen={this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href='#'>react</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='https://www.naver.com'>naver</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default ReactstrapNavbar;