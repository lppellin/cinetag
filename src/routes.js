import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favoritos from "pages/Favoritos";
import Home from "pages/Home";
import Player from "pages/Player";
import NotFound from "pages/NotFound";
import PageSrc from "pages/PageSrc";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< PageSrc />} >
                    <Route index element={<Home />} />
                    <Route path="favoritos" element={<Favoritos />} />
                    <Route path=":id" element={<Player />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter >
    )
}

export default AppRoutes