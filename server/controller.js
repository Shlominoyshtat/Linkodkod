import { posts } from "./posts.js";
import { ReadPostById } from "./postService.js";

export async function ReadPost(){
    try{
    console.log('read file successfully') 
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
        console.error('error is connect')
    }
}