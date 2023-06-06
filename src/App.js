import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CampaignP from "./Pages/CampaignP";
import ReviewsP from "./Pages/ReviewsP";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css"
function App() {
    return(
        <div className="App">
            <BrowserRouter>
                <Header/>
                    <Routes>
                       <Route path="/" element={<CampaignP/>} />
                       <Route path="/reviews" element={<ReviewsP/>} />
                    </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}
export default App;
