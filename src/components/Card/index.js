import { useFavoritosContext } from "context/FavoritosContxt";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconeFavOff from "./favoritar.png";
import iconeFavOn from "./desfavoritar.png";

function Card({ id, titulo, capa }) {
    const { favorito, adicionarFavorito } = useFavoritosContext();
    const ehFavorito = favorito.some(item => item.id === id);
    const icone = ehFavorito ? iconeFavOn : iconeFavOff;

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`} >
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icone} alt='Favoritar' className={styles.favoritar}
                onClick={() => adicionarFavorito({ id, titulo, capa })} />
        </div>
    )
}

export default Card