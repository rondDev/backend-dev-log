import { DatabaseSync } from "node:sqlite";
const db = new DatabaseSync("./dev.db");

export const getAllJokes = (_req, res) => {
  try {
    const jokes = db.prepare("SELECT * FROM Joke").all()
    res.status(200).json(jokes);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const selectJokeById = (id) => {
  const joke = db.prepare(`SELECT id, text FROM Joke WHERE id = ${id}`).get()
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
      const joke = db.prepare(`SELECT * FROM Joke ORDER BY random() LIMIT 1`).all()
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
