import LandingPage from "./pages/LandingPage";
import ProductSection from "./products/ProductSection";
import {Route, Routes} from "react-router-dom";
import YourPage from "./pages/YourPage";
import CheckoutPage from "./pages/CheckoutPage";
import ShoppingCartPage from "./pages/ShoppingCartPage"



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
            <Route path="/handlekurv" element={<ShoppingCartPage/>}/>
            <Route path="/sjekkut" element={<CheckoutPage/>}/>
        </Routes>
    </main>;
}
