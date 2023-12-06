import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element= { <Home /> }></Route>
                <Route path="/contact" element= { <Contact /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;