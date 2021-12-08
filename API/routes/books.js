const express = require("express");
const router = express.Router();

const axios = require("axios");
const config = require("../config.json");

router.get("/search", async (req, res) => {
    try {
        console.log("got search book");
        const bookData = await axios.get(
            "https://www.googleapis.com/books/v1/volumes"
            +"?q=" + req.query.name
        );

        let results = [];
        bookData.data.items.forEach((title) => {
            results.push({
                id: title.id,
                name: title.volumeInfo.title,
                original_name: title.volumeInfo.title,
                image: title.volumeInfo.imageLinks?.thumbnail ?? 'image not found',
                description: title.volumeInfo.description,
                released: title.publishedDate,
                rating: title.averageRating*2, //max is 5
                rating_top: 10,
            });
        });
        res.json(results);
    } catch (err) {
        console.log("err");
        console.log(err);
        res.json([]);
    }
});

router.get("/:id", async (req, res) => {
    try {
        let titlebook = await axios.get(
            "https://www.googleapis.com/books/v1/volumes/"
            +req.params.id
        );
        let title = titlebook.data;

        const result = {
            id: title.id,
            name: title.volumeInfo.title,
            original_name: title.volumeInfo.title,
            image: title.volumeInfo.imageLinks?.thumbnail ?? 'image not found',
            description: title.volumeInfo.description,
            released: title.publishedDate,
            rating: title.averageRating*2, //max is 5
            rating_top: 10,
        };
        res.json(result);

    } catch (err) {
        res.json([]);
    }

});


module.exports = router;
