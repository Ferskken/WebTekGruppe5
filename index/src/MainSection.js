import LandingPage from "./pages/LandingPage";
import LoginOrSignup from "./login/LoginOrSignup"
import {Route, Routes} from "react-router-dom";

/**
 * Component representing the main section. Here we select the section (component) to render, based on the path (route)
 * @return {JSX.Element}
 * @constructor
 */
export function MainSection() {
    return <main>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/dinside" element={<LoginOrSignup/>}/>
        </Routes>
    </main>;
}
