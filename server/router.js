import express from "express";
import { readById } from "./controller.js";
import { ReadData } from "./postService.js";

const router = express.Router();

router.get("/read", async (req, res) => {
  res.send(await ReadData());
});

router.get("/read/:id", async (req, res) => {
    res.json(await readById(req.params.id))
});

export default router;
