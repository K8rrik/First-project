import Main from "./../components/Main/Main";
import Benefits from "./../components/Main/Benefits/Benefits";
import Block1 from "./../components/Main/Block_1/Block1";
import Currencies from "./../components/Main/Crrency/Currencies";
import Block2 from "./../components/Main/Block_2/Block2";
import "./../Adaptive.css"
function CampaignP() {
    return(
        <div>
            <Main/>
            <Benefits/>
            <Block1/>
            <Currencies/>
            <Block2/>
        </div>
    )
}
export default CampaignP