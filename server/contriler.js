import { posts } from "./posts.js";
import { ReadPostById } from "./postService.js";

export async function ReadPost(){
    try{
    // const data = await ReadPosts();await ReadPosts()
    console.log('read file seccessfuly') 
    return posts;
    } catch{
       console.error("the server is error")
    }
}

export async function readById(req){
    try{
        const data = await ReadPostById(req)
        return data;
    } catch {
        console.error('erroe is connect')
    }
}