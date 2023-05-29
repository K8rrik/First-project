import "./Benefits.css"
function Benefit({title,description,img}) {
    return(
        <div className="benefit">
            <img src={img} className="cur_img"/>
            <div className="text">
                <div className="title">{title}</div>
                <div className="description">{description}</div>
            </div>
        </div>
    )
}
export default Benefit