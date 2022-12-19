import styles from './Comment.module.css';
import { HandsClapping, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

const oneHourAgo = new Date(new Date().setHours(-1)).toString()

interface CommentData {
    commentId: string;
    content: string;
    publishedAt: Date;
}

interface CommentProps {
    data: CommentData;
    onDelete: (commentId: string) => void;
}

export const Comment: React.FC<CommentProps> = ({ data, onDelete }) => {
    const { commentId, content } = data;
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/arubesu.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bruno Souza</strong>
                            <time title={oneHourAgo} dateTime={oneHourAgo}> 1h ago</time>
                        </div>

                        <button 
                            onClick={() => onDelete(commentId)}
                        title="Delete comment">

                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <HandsClapping />
                        Applaud <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
