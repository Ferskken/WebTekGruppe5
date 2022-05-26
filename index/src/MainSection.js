import LandingPage from "./pages/LandingPage";
import LoginOrSignup from "./displayyourpage/LoginOrSignup";
import ProductSection from "./products/ProductSection";
import {Route, Routes} from "react-router-dom";
import ShoppingCart from "./shoppingCart/ShoppingCart";
import {useSelector} from "react-redux";
import YourPage from "./pages/YourPage";
import DisplayYourPage from "./displayyourpage/DisplayYourPage";
import AdminPage from "./displayyourpage/AdminPage";


/**
 * Component representing the main section. Here we select the section (component) to render, based on the path (route)
 * @return {JSX.Element}
 * @constructor
 */

export function MainSection() {
    return <main>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/produkter" element={<ProductSection/>}/>
            <Route path="/dinside" element={<YourPage />}/>
            <Route path="/handlekurv" element={<ShoppingCart/>}/>
        </Routes>
    </main>;
}
