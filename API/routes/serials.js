const express = require("express");
const router = express.Router();

const axios = require("axios");
const config = require("../config.json");

router.get("/search", async (req, res) => {
  try {
    const tmdbData = await axios.get(
      "https://api.themoviedb.org/3/search/tv?api_key=" +
        config.keys.tmdb +
        "&query=" +
        req.query.name
    );

    let results = [];
    tmdbData.data.results.forEach((title) => {
      results.push({
        id: title.id,
        name: title.name,
        original_name: title.original_name,
        image: "https://image.tmdb.org/t/p/original" + title.poster_path,
        overview: title.overview,
        released: title.first_air_date,
        rating: title.vote_average,
        rating_top: 10,
      });
    });
    res.json(results);
  } catch (err) {
    res.json([]);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let titleTMDB = await axios.get(
        "https://api.themoviedb.org/3/tv/"
        +req.params.id
        +"?api_key=" +
        config.keys.tmdb
    );
    let title = titleTMDB.data

    const result = {
      id: title.id,
      name: title.name,
      original_name: title.original_name,
      image: "https://image.tmdb.org/t/p/original" + title.poster_path,
      overview: title.overview,
      released: title.first_air_date,
      rating: title.vote_average,
      rating_top: 10,
    };
    res.json(result);
  } catch (err) {
    res.json([]);
  }
});

router.get("/similar/:id", async (req, res) => {
  try {
    const tmdbData = await axios.get(
      "https://api.themoviedb.org/3/tv/" +
        req.params.id +
        "/similar?api_key=" +
        config.keys.tmdb
    );

    let results = [];
    tmdbData.data.results.forEach((title) => {
      results.push({
        id: title.id,
        name: title.name,
        original_name: title.original_name,
        image: "https://image.tmdb.org/t/p/original" + title.poster_path,
        overview: title.overview,
        released: title.first_air_date,
        rating: title.vote_average,
        rating_top: 10,
      });
    });
    res.json(results);
  } catch (err) {
    res.json([]);
  }
});

module.exports = router;
