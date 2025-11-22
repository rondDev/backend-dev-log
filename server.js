console.log("server file is great!");
import express from "express";
const app = express();

// Start listening
app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
