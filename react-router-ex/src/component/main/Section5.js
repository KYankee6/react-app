import {Component} from "react";
import {Button} from "reactstrap";

class Section4 extends Component {
    render() {
        return (
            <>
                <tr>
                    <td className={'w-50'}>
                        <div className={'ImgBox'}>
                            <img src={require("../../img/main-foreignRemittance-new.png")}
                                 style={{height: '715px', width: '408px'}}
                                 alt=""/>
                        </div>
                    </td>
                    <td className={'w-50'}>

                        <div className={'TextBox'}>
                                     <span className={'L-Text'}>
                                     해외계좌송금과 <br/>
                                     WU빠른해외송금을 <br/>
                                     더 쉽고, 저렴하게<br/>
                                     </span><br/>
                            <span className={'S-Text'}>
                                     해외계좌송금이 가능한 22개국을 포함하여 <br/>
                                     전세계 200여개국으로 <br/>
                                     WU빠른해외송금이 가능합니다. <br/>
                                     </span><br/>
                            <Button color={'light'} style={{margin: '20px', width: '258px', height: '56px'}}>해외송금
                                &gt;</Button>&nbsp;&nbsp;
                        </div>


                    </td>
                </tr>
            </>
        );
    }
}

export default Section4