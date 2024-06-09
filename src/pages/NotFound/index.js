import styles from "./NotFound.module.css";

function NotFound() {
    return (
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>Conteúdo não encontrado</p>
        </section>
    )
}

export default NotFound