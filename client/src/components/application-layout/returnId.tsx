import { useParams } from "react-router";
import { useEffect, useState } from "react"
import { ReadPostById } from "../readById";

export function ReturnId(){
    let {id} = useParams();
    const [post,setPost] = useState<any>('')
    useEffect(() => {
        async function PostById(){
            const res = await ReadPostById(id)
            setPost(res)
        }
        PostById()
    },[])

    return(
        <>
        {post?.id &&<div id="postById" className="mainUrl">
            <img src={post.img} alt="" />
            <figcaption>{post.figcaption}</figcaption>
            <p>name: {post.name}</p>
            <p>Uploaded at: {post.date}</p>
        </div>}
        </>
    )
}

