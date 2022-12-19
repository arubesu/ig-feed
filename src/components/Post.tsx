import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { format, parseISO, formatDistanceToNow } from 'date-fns';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Author {
    avatarUrl: string;
    name: string;
    role: string;
}

interface Content {
    type: "paragraph" | "link";
    content: string;
}

interface Comment {
    commentId: string;
    content: string;
    publishedAt: Date;
}

interface PostProps {
    author: Author,
    publishedAt: Date,
    content: Content[]
}

export const Post: React.FC<PostProps> = ({ author, publishedAt, content }: PostProps) => {

    const [comments, setComments] = useState<Comment[]>([]);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedAtISODate = parseISO(publishedAt.toString())
    const publishedDateFormatted = format(publishedAtISODate, "d LLLL HH:mm'h'");

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAtISODate, {
        addSuffix: true
    });

    function handleCreateNewComment() {
        event.preventDefault()

        setComments([...comments, {
            content: newCommentText,
            commentId: uuidv4(),
            publishedAt: new Date(),
        }]);

        setNewCommentText('');
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target!.value);
    }

    function handleDeleteComment(commentId:string) {
        const newComments = comments.filter(({ commentId: id }) => id !== commentId)

        setComments(newComments);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAtISODate.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
                <strong>Leave your feedback</strong>
                <textarea
                    name="comment"
                    placeholder="leave a comment"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />

                <footer>
                    <button type="submit">Publish</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment.commentId} data={comment} onDelete={handleDeleteComment}/>
                })}
            </div>
        </article>
    )
}