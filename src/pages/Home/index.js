import Banner from "components/Banner";
import Title from "components/Title";
import Card from "components/Card";
import { useEffect, useState } from "react";

import styles from "./Home.module.css";

function Home() {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/lppellin/cinetag-api/videos')
            .then(retorno => retorno.json())
            .then(dados => setVideos(dados))
    }, []);

    return (
        <>
            <Banner imagem="home" />
            <Title>
                <h1>Um lugar para guardar seus filmes!</h1>
            </Title>
            <section className={styles.container}>
                {videos.map((video) => { return <Card {...video} key={video.id} /> })}
            </section>
        </>
    )
}

export default Home;