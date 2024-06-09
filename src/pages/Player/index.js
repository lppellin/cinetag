import Banner from "components/Banner";
import styles from "./Player.module.css";
import Title from "components/Title";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "pages/NotFound";

function Player() {

    const [video, setVideo] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/lppellin/cinetag-api/videos?id=${params.id}`)
            .then(retorno => retorno.json())
            .then(dados => setVideo(...dados))
    }, []);

    if (!video) {
        return <NotFound />
    }

    return (
        <>
            <Banner imagem="player" />
            <Title>
                <h1>Player</h1>
            </Title>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                >
                </iframe>
            </section>

        </>
    )
}

export default Player