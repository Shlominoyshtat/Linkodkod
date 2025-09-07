import {postArray} from './posts.js'

export default function PostsPage() {
  return (postArray.map((post) => {
    post.img,
    post.figcaotion,
    post.like,
    post.name,
    post.date
  }))
}
