import "./Main.css"
import sberbank from "./../../imgs/sberbank.png"
import yamoney from "./../../imgs/yamoney.png"
import arrows from "./../../imgs/arrows.png"
import Main_img from "./../../imgs/Main.png"
function Main() {
    return(
        <div className={"main_top"}>
            {/*<img className="Main_png" src={Main_img}/>*/}
            {/*<img className="Main_png1 " src={Main_img}/>*/}
            <div className={"main_top_text"}>
                Мультивалютный <br/> обменный сервис 24/7 <br/>
                <p className={"main_top_texts"}>Быстрый обмен без скрытых комиссий</p>

            </div>
            <div className={"main_top_info"}>
                <div className={"main_top_info_give"}>
                    <h2>Вы отдаете</h2>
                    <p>Сумма</p>
                    <div className={"main_top_info_give_event"}>
                        <input placeholder={"1000.00"}/>
                        <div className={"main_top_info_give_event_un"}>
                            <img src={sberbank} width="32px" height="32px"/>
                            <div className={"select-wrapper"}>
                                <select name={'current_cash_in'} id={""} className={"select"}>
                                    <option value={"1"}>RUB</option>
                                    <option value={"2"}>USD</option>
                                    <option value={"3"}>EUR</option>
                                </select>
                            </div>

                        </div>
                    </div>
                </div>
                <img src={arrows} className={"main_top_info_arrows"} />
                <div className={"main_top_info_get"}>
                    <div className="main_top_info_get_">
                        <h2>Вы получаете</h2>
                        <p>с учётом комиссии ПС (0.5%)</p>
                    </div>
                    <p>Сумма</p>
                    <div className={"main_top_info_get_event"}>
                        <input placeholder={"970.00"}/>
                        <div className={"main_top_info_get_event_un"}>
                            <img src={yamoney} width="32px" height="32px"/>
                            <div className={"select-wrapper"}>
                                <select name={'current_cash_out'} id={""} className={"select"}>
                                    <option value={"1"}>RUB</option>
                                    <option value={"2"}>USD</option>
                                    <option value={"3"}>EUR</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={"main_top_info_convert"}>Обменять</button>
            </div>
        </div>
    )

}
export default Main