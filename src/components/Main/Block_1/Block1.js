import "./Block1.css"
import block1 from "../../../imgs/Block1.png"
function Block1() {
    return(
        <div className="Block1">
            <div className="Block">
                <div className="Block_text">
                    <h2>Сервис обмена электронных валют с 5-летней историей</h2>
                    <p>За время работы мы приобрели репутацию проверенного партнера и делаем все возможное, чтобы ваши впечатления от нашего сервиса были только благоприятными.</p>
                </div>
                <img src={block1}/>
            </div>
        </div>
    )
}
export default Block1