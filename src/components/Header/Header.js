import "./Header.css"

function Header() {
    return(
        <div className={"nav"}>
            <div className={"nav_logo"}>MONEYEXCHANGE</div>
            <ul className={"nav_navigation"}>
                <li className={"nav_navigation_1"}>Кампания</li>
                <li className={"nav_navigation_1"}>Блог</li>
                <li className={"nav_navigation_1"}>Контакты</li>
            </ul>
            <ul className={"nav_enter"}>
                <button className={"nav_btn_enter"}><div>Вход</div></button>
                <button className={"nav_btn_regist"}><div className={"btn"}>Регистрация</div></button>
            </ul>
        </div>
    )
}
export default Header