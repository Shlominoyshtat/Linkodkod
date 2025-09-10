import { useEffect, useState } from "react";
import Like from "./like.tsx";
import funFetch from "./utils/fetch.tsx";

export default function PostsPage() {
  const [post, setPost] = useState<post[]>([]);
  useEffect(() => {
    async function readPost() {
      try {
        const data = await funFetch("http://localhost:3000/read");
        setPost(data);
      } catch (err: any) {
        console.error("error thr useEffect", err);
      }
    }
    readPost();
  }, []);

  return post.map((post) => (
    <section className="app">
      <div id="post" key={post.id} className="main">
        <img src={post.img} alt="" id="phase" />
        <figcaption>{post.figcaption}</figcaption>
        <p>name: {post.name}</p>
        <p>Uploaded at: {post.date}</p>
        <Like />
      </div>
    </section>
  ));
}

type post = {
  id: number;
  img: string;
  figcaption: string;
  name: string;
  date: string;
};
