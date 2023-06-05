import "./Benefits.css"
import Benefit from "./Benefit";
import {benefits} from "../../../helpers/benefitsList";
function Benefits() {
    return(
        <div className="main_benefits">
            <div className="benefits">
            {benefits.map((cur_benefit) =>{
                return(
                        <Benefit key={cur_benefit.id} title={cur_benefit.title} description={cur_benefit.description} img={cur_benefit.img}/>
                )
            })
            }
            </div>
        </div>
    )
}
export default Benefits