import "./Header.css"
import { Link } from 'react-router-dom';
import {useLocation} from "react-router-dom";

function Header() {
    const location = useLocation()
    function isActive(pathName) {
        return location.pathname === pathName ? "active" : "";
    }
    return(
        <div className="nav">
            <div className="logo">
                <div className="logo_img"></div>
                <div className="logo_name">
                    <div className="logo_name_1">MONEYEX</div>
                    <div className="logo_name_2">CHANGE</div>
                </div>
            </div>
            <ul className={"nav_navigation"}>
                <li className={"nav_navigation_1" + isActive("/")}>
                    <Link to="/">Кампания</Link>
                </li>
                <li className={"nav_navigation_1" + isActive("/reviews")}>
                    <Link to="/reviews">Отзывы</Link>
                </li>
                <li className={"nav_navigation_1" + isActive("/contacts")}>
                    <Link to="/contacts">Контакты</Link>
                </li>
            </ul>
            <div className="adapt_h">
                <div className="logo_copy">
                    <div className="logo_img"></div>
                    <div className="logo_name">
                        <div className="logo_name_1">MONEYEX</div>
                        <div className="logo_name_2">CHANGE</div>
                    </div>
                </div>
                <ul className={"nav_enter"}>
                    <button className={"nav_btn_enter"}><div>Вход</div></button>
                    <button className={"nav_btn_regist"}><div className={"btn"}>Регистрация</div></button>
                </ul>
            </div>
        </div>
    )
}
export default Header