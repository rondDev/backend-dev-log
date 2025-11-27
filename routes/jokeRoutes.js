import express from "express";
import {
  getAllJokes,
  getJokeById,
  getRandomJoke,
  createJoke,
} from "../controllers/jokeController.ts";

const router = express.Router();

router.get("/", getAllJokes);
router.get("/random", getRandomJoke);
router.get("/:id", getJokeById);
router.post("/", createJoke);

export default router;
