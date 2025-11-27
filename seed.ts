import { DatabaseSync } from "node:sqlite";
import { existsSync, rmSync } from "node:fs";
import file from "./data/jokes.json" with { type: "json" };

if (existsSync("./dev.db")) {
  rmSync("./dev.db");
}
const db = new DatabaseSync("./dev.db");
db.exec(`CREATE TABLE Joke(id INTEGER PRIMARY KEY, text TEXT)`);

const ins = db.prepare("INSERT INTO Joke (id, text) VALUES (?, ?)");
file.forEach((s) => {
  ins.run(s.id, s.joke);
});

const sql = db.createTagStore();

const all = sql.all`SELECT * FROM Joke`;
console.log(all);
