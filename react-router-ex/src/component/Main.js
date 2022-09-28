import {Component} from "react";
import {Table} from 'reactstrap'
import Section0 from "./main/Section0";
import Section1 from "./main/Section1";
import Section2 from "./main/Section2";
import Section3 from "./main/Section3";
import Section4 from "./main/Section4";
import Section5 from "./main/Section5";
import Section6 from "./main/Section6";
import Section7 from "./main/Section7";

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
                    <Section2/>
                    <Section3/>
                    <Section4/>
                    <Section5/>
                    <Section6/>
                    <Section7/>
                    </tbody>
                </Table>
            </>
        );
    }
}

export default Main