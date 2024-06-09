import Banner from "components/Banner";
import Title from "components/Title";
import Card from "components/Card";
import styles from './Favoritos.module.css'
import { useFavoritosContext } from "context/FavoritosContxt";

function Favoritos() {
    const { favorito } = useFavoritosContext();
    return (
        <>
            <Banner imagem="favoritos" />
            <Title>
                <h1>Seus filmes favoritos</h1>
            </Title>
            <section className={styles.container}>
                {favorito.map((item) => { return <Card {...item} key={item.id} /> })}
            </section>
        </>
    )
}

export default Favoritos 