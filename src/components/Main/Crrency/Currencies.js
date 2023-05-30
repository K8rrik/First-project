import "./Currencies.css"
import {currencies} from "../../../helpers/valutsList"
import Currency from "./Currency";
function Currencies() {
    return(
        <div>
            <h2 className="currencies_header">Резерв валют</h2>
            <div className="currencies">
                {currencies.map((current_val) => {
                    return(
                        <Currency key={current_val.name} name={current_val.name} img={current_val.img} value={current_val.value}/>
                    )
                })}
            </div>
        </div>
    )
}
export default Currencies