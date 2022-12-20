import { Header } from './components/Header'
import styles from './App.module.css';
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

import './global.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

interface Post {
  id: string;
  author: Author,
  publishedAt: Date,
  content: Content[]
}

function App() {
  const [posts, setPosts] = useState<Post[]>([])

  const getPosts = async () => {
    const {data} = await axios.get<Post[]>('http://localhost:3000/posts');
    setPosts(data)
  }

 useEffect(() => {
  getPosts();
 }, [])

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
               key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
