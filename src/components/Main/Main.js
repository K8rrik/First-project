import "./Main.css"
function Main() {
    return(
        <div className={"main_top"}>
            <div className={"main_top_text"}>
                Мультивалютный <br/> обменный сервис 24/7 <br/>
                <p className={"main_top_texts"}>Быстрый обмен без скрытых комиссий</p>

            </div>
            <div className={"main_top_info"}>
                <div className={"main_top_info_give"}>
                    <h2>Вы отдаете</h2>
                    <br/>
                    <p>Сумма</p>
                    <div className={"main_top_info_give_events"}>
                        <input/>
                        |
                        <img/>
                        <button></button>
                    </div>
                </div>
                <div className={"main_top_info_get"}>
                    <p> <h2>Вы получаете</h2>с учётом комиссии ПС (0.5%)</p>
                    <br/>
                    <p>Сумма</p>
                    <div className={"main_top_info_get_events"}>
                        <input/>
                        |
                        <img/>
                        <button></button>
                    </div>
                </div>
                <button className={"main_top_info_convert"}>Обменять</button>
            </div>
        </div>
    )

}
export default Main