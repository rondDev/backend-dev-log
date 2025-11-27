import { DatabaseSync } from "node:sqlite";
const db = new DatabaseSync("./dev.db");
const sql = db.createTagStore();

export const getAllJokes = (_req, res) => {
  try {
    const jokes = sql.all`SELECT * FROM Joke`
    res.status(200).json(jokes);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const selectJokeById = (id) => {
  const joke = sql.get`SELECT id, text FROM Joke WHERE id = ${id}`
  return joke;
};

export const getJokeById = (req, res) => {
    try {
        const requestId = req.params.id;
        if (!Number.isInteger(Number.parseInt(requestId))) {
            return res.status(400).json({ error: "Bad request" });
        }

        const joke = selectJokeById(requestId);
        res.status(200).json(joke);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const getRandomJoke = (_req, res) => {
    try {
      const joke = sql.all`SELECT * FROM Joke ORDER BY random() LIMIT 1`
        res.status(200).json(joke);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const createJoke = (req, res) => {
    try {
        const text = req.body.text;
        if (!text) {
            return res.status(400).json({ error: "text doesn't exist" });
        }

      const insertJoke = db.prepare("INSERT INTO Joke (text) VALUES (?)")
      insertJoke.run(text)

      res.status(201).json({message: "Added"});
    } catch (err) {
        return res.status(500).json({ error: err });
    }
};
