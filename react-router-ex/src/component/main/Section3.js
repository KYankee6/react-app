import {Component} from "react";
import {Badge, Button} from "reactstrap";

class Section3 extends Component {
    render() {
        return (
            <>
                <tr>
                    <td className={'w-50'}>
                        <div className={'ImgBox'}>
                            <img src={require("../../img/main-moim.png")} height={'750px'} width={'550px'}
                                 alt=""/>
                        </div>
                    </td>
                    <td className={'w-50'}>
                        <div className={'TextBox'}>
                            <span className={'L-Text'}>
                                함께 쓰고 같이 보는 <br/>
                                <Badge color={"warning"}>B</Badge> 모임통장
                            </span> <br/>
                            <span className={'S-Text'}>
                                토토 친구들을 바로 모임통장으로 초대하고 <br/>
                                친구들과 함께 잔액과 입출금 현황을 확인할 수 있습니다.
                                재미있는 메시지 카드로 회비 입금 요청도 해보세요.
                            </span><br/>
                            <Button color='light' size='sm'>모임통장</Button>
                        </div>
                    </td>
                </tr>
            </>
        );
    }
}

export default Section3