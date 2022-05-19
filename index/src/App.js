
import Navbar from "./navigation/Navbar";
import {MainSection} from "./MainSection";
import {BrowserRouter as Router} from "react-router-dom";

export default function App() {
  return (
      <Router>
        <Navbar/>
        <MainSection/>
      </Router>

  )
}
