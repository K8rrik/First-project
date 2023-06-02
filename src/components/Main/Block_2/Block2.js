import "./Block2.css"
import block2_img from "./../../../imgs/Main.png"
function Block2() {
    return(
        <div className="main_block2">
            <img src={block2_img}  className="block2_img"/>
            <div className="block2_text">
                <h2 className="block2_text_h2">Будем рады предоставить вам качественный обмен валют на нашем сервисе!</h2>
                <p className="block2_text_p">Начните обмен прямо сейчас</p>
                <button className="block_2_button">Начать обмен</button>
            </div>
        </div>
    )
}
export default Block2