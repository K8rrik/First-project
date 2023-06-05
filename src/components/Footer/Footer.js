import "./Footer.css"
import vk from "./../../imgs/vk.png"
import facebook from "./../../imgs/facebook.png"
import instagram from "./../../imgs/instagram.png"
function Footer() {
    return(
        <div className="Footer">
            <div className="adapt_f">
                <div className="logo_footer">
                    <div className="logo_f">
                        <div className="logo_f_img"></div>
                        <div className="logo_f_name">
                            <div className="logo_f_name_1">MONEYEX</div>
                            <div className="logo_f_name_2">CHANGE</div>
                        </div>
                    </div>
                    <div className="logo_info">Сервис обмена электронных валют</div>
                </div>
                <div className="footer_icons_copy">
                    <a href="https://vk.com/feed"> <img className="footer_icon" src={vk}/></a>
                    <a href="https://www.facebook.com/"><img className="footer_icon" src={facebook}/></a>
                    <a href="https://www.instagram.com/"><img className="footer_icon" src={instagram}/></a>
                </div>
            </div>
            <ul className="fot_navigation">
                <li>Карта сайта</li>
                <li>Предупреждение</li>
                <li>Правила сайта</li>
                <li>Обмен</li>
            </ul>
            <div className="footer_icons">
                <a href="https://vk.com/feed"> <img className="footer_icon" src={vk}/></a>
                <a href="https://www.facebook.com/"><img className="footer_icon" src={facebook}/></a>
                <a href="https://www.instagram.com/"><img className="footer_icon" src={instagram}/></a>
            </div>
        </div>
    )
}
export default Footer