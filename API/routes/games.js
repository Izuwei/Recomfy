const express = require("express");
const router = express.Router();

const axios = require("axios");
const config = require("../config.json");

router.get("/search", async (req, res) => {
  const url =
    "https://api.rawg.io/api/games?key=" +
    config.keys.rawg +
    "&search=" +
    req.query.name;

  let data = await axios
    .get(url)
    .then((rawgResult) => {
      return rawgResult.data.results;
    })
    .catch((err) => {
      return [];
    });

  let result = [];

  data.forEach((title) => {
    let tags = [];
    title.tags.forEach((tag) => {
      if (tag.language === "eng") {
        tags.push(tag.name);
      }
    });

    result.push({
      id: title.id,
      name: title.name,
      image: title.background_image,
      rating: title.rating,
      ratingTop: title.rating_top,
      released: title.released,
      updated: title.updated,
      tags: tags,
    });
  });

  res.json(result);
});

module.exports = router;
