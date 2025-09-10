import { ReadPost } from "./controller.js";
import { posts } from "./posts.js";

export async function ReadData() {
    return await ReadPost();
}

export async function ReadPostById(req) {
  try {
    const idNum = parseInt(req);
    const result = posts.find((p) => p.id === idNum);
    if (result.id === idNum) {
      return result;
    } else {
      console.error("The id is not compatible with");
    }
  } catch {
    return "Error checking the id";
  }
}
