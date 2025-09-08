import { useState } from 'react'
import {postArray} from './posts.ts'

export default function PostsPage() {
  const [count,setCount] = useState(0)
  return (postArray.map((post) => (
    <section className='app'>
    <div id='post' key={post.id} className='main'>
      <img src={post.img} alt="" />
      <figcaption>{post.figcaotion}</figcaption>
      <p>name: {post.name}</p>
      <p>Uploaded at: {post.date}</p>
      <p onClick={() => setCount((count) => count + 1)}>👍
        {count} 
      </p>
    </div>
    </section>
  )))
}
