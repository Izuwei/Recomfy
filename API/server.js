const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("TAMa server is running.");
});

const movieRouter = require("./routes/movies");
const serialRouter = require("./routes/serials");
const gameRouter = require("./routes/games");
const bookRouter = require("./routes/books");
const animeRouter = require("./routes/anime");
const mangaRouter = require("./routes/manga");
const recRouter = require("./routes/recommendations");

app.use("/movies", movieRouter);
app.use("/serials", serialRouter);
app.use("/games", gameRouter);
app.use("/books", bookRouter);
app.use("/anime", animeRouter);
app.use("/manga", mangaRouter);
app.use("/recommendation", recRouter);

// Set port, listen for requests
const PORT = process.env.port || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
