import FavoritosProvider from "context/FavoritosContxt";
import Header from "../../components/Header";
import Container from "components/Container";
import Footer from "components/Footer";
import { Outlet } from "react-router-dom";

function PageSrc() {
    return (
        <main>
            <Header />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Footer />
        </main>
    )
}
export default PageSrc