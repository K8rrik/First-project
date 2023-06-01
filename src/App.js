import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Benefits from "./components/Benefits/Benefits";
import Block1 from "./components/Main/Block_1/Block1";
import Currencies from "./components/Main/Crrency/Currencies";
import Reviews from "./components/Main/Reviews/Reviews";
function App() {
    return(
        <div>
            <Header/>
            <Main/>
            <Benefits/>
            <Block1/>
            <Currencies/>
            <Reviews/>
            <Footer/>
        </div>
    )
}

export default App;
