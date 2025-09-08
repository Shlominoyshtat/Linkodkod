import express from 'express';
import ReadPosts from './postService.js';

const router = express.Router();

router.get('/read',async (req,res) => {
    try{
    const data = await ReadPosts()
    res.send(data);
    console.log('read file seccessfuly') 
    } catch{
        res.status(500).json({message:"the server is error"})
    }
})

export default router;