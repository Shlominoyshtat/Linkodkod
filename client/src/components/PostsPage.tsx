import Like from './like.tsx'
import {postArray} from './posts.ts'

export default function PostsPage() {
  return (postArray.map((post) => (
    <section className='app'>
    <div id='post' key={post.id} className='main'>
      <img src={post.img} alt="" id='phase'/>
      <figcaption>{post.figcaotion}</figcaption>
      <p>name: {post.name}</p>
      <p>Uploaded at: {post.date}</p>
      <Like/>
    </div>
    </section>
  )))
}
