import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Products from "./pages/produtos";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element= { <Home /> }></Route>
                <Route path="/contato" element= { <Contact /> }></Route>
                <Route path="/produtos" element= { <Products /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;