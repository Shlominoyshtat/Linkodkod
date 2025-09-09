// import fs from "fs/promises";
import { ReadPost } from "./contriler.js";
import { posts } from "./posts.js";

export async function ReadData() {
//   return fs.readFile("./posts.js", "utf8", (err, data) => {
    // if (err) {
    //   console.error("Error reading file: ", err);
    // }
    // console.log("File content: ", data);
    return await ReadPost();
//   });
}

export async function ReadPostById(req) {
  try {
    const idNum = parseInt(req);
    const resoult = posts.find((p) => p.id === idNum);
    if (resoult.id === idNum) {
      return resoult;
    } else {
      console.error("error the complient");
    }
  } catch {
    return "The id is not compatible with";
  }
}
