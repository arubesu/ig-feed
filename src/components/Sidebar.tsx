import styles from './Sidebar.module.css';

export const Sidebar: React.FC = () => {
    return (
        <aside className={styles.sidebar}>
            <img
                alt=''
                className={styles.cover}
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />

            <div className={styles.profile}>
                <strong>Bruno Souza</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    Edit Profile
                </a>
            </footer>
        </aside>
    );
}
