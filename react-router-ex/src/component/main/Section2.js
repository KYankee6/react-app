import {Component} from "react";
import {Button} from "reactstrap";

class Section2 extends Component {
    render() {
        return (
            <>
                <tr>
                    <td className={'w-70'}>
                        <div className={'TextBox'}>
                            <span className={'L-Text'}>
                                우대조건 없이 <br/>
                                합리적인 예금과 적금
                            </span><br/>
                            <span className={'S-Text'}>
                                기대했던 금리와 다르게 복잡한 우대조건에 실망한 적이 있었나요?<br/>
                                토토뱅크의 예금, 적금은 숨겨진 우대조건 없이 누구에게나 편리하고 합리적입니다.
                            </span><br/>
                            <Button color={'light'} size={'sm'}>정기예금 &gt;</Button>&nbsp;&nbsp;
                            <Button color={'light'} size={'sm'}>자유적금 &gt;</Button>
                            <img src={require("../../img/main-savings-money.png")} height={'124px'} width={'522px'}
                                 alt=""/>
                        </div>
                    </td>
                    <td className={'w-30'}>
                        <div className={'ImgBox'}>
                            <img src={require("../../img/main-savings.png")} height={'850px'} width={'550px'}
                                 alt=""/>
                        </div>
                    </td>
                </tr>
            </>
        );
    }
}

export default Section2