import LandingPage from "./pages/LandingPage";
import LoginOrSignup from "./login/LoginOrSignup";
import ProductSection from "./products/ProductSection";
import {Route, Routes} from "react-router-dom";
import ShoppingCart from "./shoppingCart/ShoppingCart";
import {useSelector} from "react-redux";


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
            <Route path="/dinside" element={<LoginOrSignup/>}/>
            <Route path="/handlekurv" element={<ShoppingCart/>}/>
        </Routes>
    </main>;
}
