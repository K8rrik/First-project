import "./Currencies.css"
function Currency({name,img,value}) {
    return(
        <div className="currency">
            <img src={img}/>
            <div className="currency_text">
                <div className="currency_name">{name}</div>
                <div className="currency_value">{value}</div>
            </div>
        </div>
    )
}
export default Currency