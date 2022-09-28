import {Component} from "react";
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <>
                <ul className={'nav-items'}>
                    <li className={'nav-item'}>
                        <Link to={'/'} id={'logo'}>toto<b>bank</b></Link>
                    </li>
                    <li className={'nav-item'}>
                        <Link to={'/BankInfo'}>은행소개</Link>
                    </li>

                    <li className={'nav-item'}>
                        <Link to={'/MakeAccount'}>계좌개설</Link>
                    </li>

                    <li className={'nav-item'}>
                        <Link to={'/Deposit'}>입금</Link>
                    </li>

                    <li className={'nav-item'}>
                        <Link to={'/Withdraw'}>출금</Link>
                    </li>

                    <li className={'nav-item'}>
                        <Link to={'/Transfer'}>계좌이체</Link>
                    </li>

                    <li className={'nav-item'}>
                        <Link to={'/AccountInfo'}>계좌조회</Link>
                    </li>
                </ul>

            </>
        );
    }
}

export default Header