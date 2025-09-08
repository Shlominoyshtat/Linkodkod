import fs from 'fs/promises';

export default function ReadPosts(){
    return fs.readFile('./posts.txt','utf8',(err,data) => {
        if(err){
            console.error("Error reading file: ", err)
        }
        console.log("File content: ",data)
    })
}