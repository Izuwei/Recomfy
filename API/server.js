const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("TAMa server is running.");
});

const gameRouter = require("./routes/games");

app.use("/games", gameRouter);

// Set port, listen for requests
const PORT = process.env.port || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
