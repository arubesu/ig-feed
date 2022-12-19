import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

const oneHourAgo = new Date(new Date().setHours(-1)).toString()

export const Post: React.FC = () => {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar  src="https://github.com/arubesu.png" />
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
                <p>👉&nbsp;&nbsp;&nbsp;<a href="">https://github.com/arubesu/ig-feed</a></p>
                <p>
                    <a href="">#newproject</a>&nbsp;
                    <a href="">#nlw</a>&nbsp;
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Leave your feedback</strong>

                <textarea
                    placeholder="leave a comment"
                />

                <footer>
                    <button type="submit">Publish</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}