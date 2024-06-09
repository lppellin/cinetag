import HeaderLink from "components/HeaderLink";
import styles from "./Header.module.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className={styles.header}>
            <Link to="./">
                <img src={logo} alt="cinetag logo"></img>
            </Link>
            <nav>
                <HeaderLink url="/">
                    Início
                </HeaderLink>
                <HeaderLink url="/favoritos">
                    Favoritos
                </HeaderLink>
            </nav>


        </header>
    )
}

export default Header