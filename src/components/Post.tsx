import styles from './Post.module.css';

const oneHourAgo = new Date(new Date().setHours(-1)).toString()

export const Post: React.FC = () => {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/arubesu.png" />
                    <div className={styles.authorInfo}>
                        <strong>Bruno Souza</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title={oneHourAgo} dateTime={oneHourAgo}>Published 1h ago</time>
            </header>

            <div className={styles.content}>
                <p>Hey guys 👋</p>
                <p>Et nobis eos modi soluta accusantium est voluptates commodi. Voluptatem aperiam est impedit recusandae atque. Qui numquam facilis. Veritatis debitis corporis voluptatem asperiores voluptatem quo.</p>
                <p>👉<a href="">https://github.com/arubesu/ig-feed</a></p>
                <p><a href="">#newproject #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}