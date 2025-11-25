import { prisma } from "../lib/prisma.js";

export const getAllJokes = async (_req, res) => {
    try {
        const jokes = await prisma.joke.findMany();
        res.status(200).json(jokes);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

const selectJokeById = async (id) => {
    const joke = await prisma.joke.findUnique({
        where: { id: Number.parseInt(id) },
    });
    return joke;
};

export const getJokeById = async (req, res) => {
    try {
        const requestId = req.params.id;
        console.log(Number.isInteger(Number.parseInt(requestId)));
        // const joke = await selectJokeById(requestId);
        // res.json(joke);
        res.send("Done");
    } catch (err) {}
};

export const getRandomJoke = async (_req, res) => {
    const totalJokes = await prisma.joke.count();
    const randomId = Math.floor(Math.random() * totalJokes);
    const joke = await selectJokeById(randomId);
    res.status(200).json(joke);
};

export const createJoke = async (req, res) => {
    const text = req.body.text;

    const newJoke = await prisma.joke.create({
        data: { text },
    });
    res.status(201).json(newJoke);
};
