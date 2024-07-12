import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/thiagore4l.png',
      name: 'Thiago Luiz',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋,' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'paragraph', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-07-11 15:20:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/ThiagoPierre.png',
      name: 'Thiago Pierre',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋,' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'paragraph', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-07-09 15:20:00'),
  },
];

export function App() {
  return (
    <div>
      <Header/>

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