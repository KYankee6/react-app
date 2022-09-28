import {Component} from "react";
import {Button} from "reactstrap";

class Section4 extends Component {
    render() {
        return (
            <>
                <tr>
                    <td className={'w-50'}>
                        <div className={'ImgBox'}>
                            <img src={require("../../img/main-26weeks.png")} height={'492px'} width={'408px'}
                                 alt=""/>
                        </div>
                    </td>
                    <td className={'w-50'}>

                        <div className={'TextBox'}>
                            <span className={'L-Text'}>
                                함께 도전해서  <br/>
                                재미있는 26주 적금
                            </span><br/>
                            <span className={'S-Text'}>
                                26주동안 변화하는 재미에 빠져있는 사이 <br/>
                                어느덧 만기 달성 경험을 맛보게 됩니다.
                            </span><br/>
                            <Button color={'light'} style={{margin: '20px', width: '258px', height: '56px'}}>26주
                                적금 &gt;</Button>&nbsp;&nbsp;
                        </div>


                    </td>
                </tr>
            </>
        );
    }
}

export default Section4