const express = require("express");
const router = express.Router();

const axios = require("axios");
const config = require("../config.json");

router.get("/:id", async (req, res) => {
  try {
    const rawgData = await axios.get(
      "https://api.rawg.io/api/games/" +
        req.params.id +
        "?key=" +
        config.keys.rawg
    );
    const title = rawgData.data;

    let tags = [];
    title.tags.forEach((tag) => {
      if (tag.language === "eng") {
        tags.push(tag.name);
      }
    });

    const result = {
      id: title.id,
      name: title.name,
      image: title.background_image,
      description: title.description_raw,
      rating: title.rating,
      rating_top: title.rating_top,
      released: title.released,
      updated: title.updated,
      tags: tags,
    };
    res.json(result);
  } catch (err) {
    res.json([]);
  }
});

router.get("/search", async (req, res) => {
  try {
    const rawgData = await axios.get(
      "https://api.rawg.io/api/games?key=" +
        config.keys.rawg +
        "&search=" +
        req.query.name
    );

    let results = [];
    for (const title of rawgData.data.results) {
      let tags = [];
      title.tags.forEach((tag) => {
        if (tag.language === "eng") {
          tags.push(tag.name);
        }
      });

      var description = "";
      try {
        const details = await axios.get(
          "https://api.rawg.io/api/games/" +
            title.id +
            "?key=" +
            config.keys.rawg
        );
        description = details.data.description_raw;
      } catch (err) {
        description = "";
      }

      results.push({
        id: title.id,
        name: title.name,
        image: title.background_image,
        description: description,
        rating: title.rating,
        rating_top: title.rating_top,
        released: title.released,
        updated: title.updated,
        tags: tags,
      });
    }
    res.json(results);
  } catch (err) {
    res.json([]);
  }
});

module.exports = router;
