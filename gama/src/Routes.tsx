import {Routes as WrapperRoutes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home/Index";
import Contatos from "./pages/Contato/Index";
export default function Routes(){
    return(
        <BrowserRouter>
            <WrapperRoutes>
                <Route path="/" element={<Home/>} />
                <Route path="/contato/:id" element={<Contatos/>} />
            </WrapperRoutes>
        </BrowserRouter>

    )
}