import "./Main.css"
import sberbank from "./../../imgs/sberbank.png"
import yamoney from "./../../imgs/yamoney.png"
import arrows from "./../../imgs/arrows.png"
import {useEffect, useState} from "react";
function Main() {
    const [rates, setRates] = useState({})
    const [initialValue, setInitialValue] = useState("RUB")
    const [finalValue, setFinalValue] = useState("RUB")
    const [initialPrice, setInitialPrice] = useState("")
    const [finalPrice, setFinalPrice] = useState("")

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://www.cbr-xml-daily.ru/latest.js");
                const data = await response.json();
                setRates(data.rates)
            } catch (error) {
                console.log("Ошибка запроса", error);
            }
        }
        fetchData();
    }, []);
    function InitialValue(e) {
        const value = e.target.value
        setInitialPrice(value)
    }

    useEffect(() => {
        if (!initialPrice && !finalPrice) {
            return;
        }
        let currentInValut = rates[initialValue]
        let currentOutValut = rates[finalValue]
        if (initialValue === "RUB") {
            currentInValut = 1
        }
        if (finalValue === "RUB") {
            currentOutValut = 1
        }
        const price = initialPrice / currentInValut
        const result = price * currentOutValut
        setFinalPrice(result.toFixed())
    },[initialPrice,initialValue])


    function FinalValue(e) {
        const value = e.target.value;
        setFinalPrice(value);
    }

    useEffect(() => {
        if (!initialPrice && !finalPrice) {
            return;
        }
        let currentInValut = rates[initialValue]
        let currentOutValut = rates[finalValue]
        if (initialValue === "RUB") {
            currentInValut = 1
        }
        if (finalValue === "RUB") {
            currentOutValut = 1
        }
        const price = finalPrice  / currentOutValut
        const result = price * currentInValut
        setInitialPrice(result.toFixed())
    },[finalPrice,finalValue])


    return(
        <div className={"main_top"}>
            <div className={"main_top_text"}>
                Мультивалютный <br/> обменный сервис 24/7 <br/>
                <p className={"main_top_texts"}>Быстрый обмен без скрытых комиссий</p>
            </div>
            <div className={"main_top_info"}>
                <div className={"main_top_info_give"}>
                    <h2>Вы отдаете</h2>
                    <p>Сумма</p>
                    <div className={"main_top_info_give_event"}>
                        <input type={"number"} placeholder={"1000.00"} value={initialPrice} onChange={InitialValue}/>
                        <div className={"main_top_info_give_event_un"}>
                            <img src={sberbank} width="32px" height="32px"/>
                            <div className={"select-wrapper"}>
                                <select name="current_cash_in" id="" className="select" onChange={(e) => setInitialValue(e.target.value)}>
                                    <option value={"RUB"}>RUB</option>
                                    <option value={"USD"}>USD</option>
                                    <option value={"EUR"}>EUR</option>
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
                        <input type={"number"} placeholder={"995.00"} value={finalPrice} onChange={FinalValue}/>
                        <div className={"main_top_info_get_event_un"}>
                            <img src={yamoney} width="32px" height="32px"/>
                            <div className={"select-wrapper"}>
                                <select name={'current_cash_out'} id={""} className={"select"} onChange={(e) => setFinalValue(e.target.value)}>
                                    <option value={"RUB"}>RUB</option>
                                    <option value={"USD"}>USD</option>
                                    <option value={"EUR"}>EUR</option>
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