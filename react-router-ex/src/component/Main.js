import {Component} from "react";
import {Table} from 'reactstrap'
import Section0 from "./main/Section0";
import Section1 from "./main/Section1";

const array = [1, 2, 3];

class Main extends Component {
    render() {
        return (
            <>
                {/*<h1 className={'Main'}>Main</h1>*/}
                <Table borderless size={'sm'}>
                    <tbody>
                    {/*개수만큼 사용하고 싶을 때*/}
                    {/*{array.map((item) => <Section0 data={item}/>)}*/}
                    <Section0/>
                    <Section1/>
                    </tbody>
                </Table>
            </>
        );
    }
}

export default Main