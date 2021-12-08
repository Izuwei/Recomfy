const express = require("express");
const router = express.Router();

const axios = require("axios");
const config = require("../config.json");

router.get("/search", async (req, res) => {
    try {
        console.log("got search manga");
        const malData = await axios.get(
            "https://api.myanimelist.net/v2/manga"
            +"?q=" + req.query.name
            +"&limit=20"
            +"&fields=id,title,main_picture,start_date,synopsis,mean", {
                headers: {
                    "X-MAL-CLIENT-ID": config.keys.mal
                }
            }
        );

        let results = [];
        malData.data.data.forEach((title) => {
            title = title.node;
            results.push({
                id: title.id,
                name: title.title,
                original_name: title.title,
                image: title.main_picture.medium,
                description: title.synopsis,
                released: title.start_date,
                rating: title.mean,
                rating_top: 10,
            });
        });
        res.json(results);
    } catch (err) {
        console.log("err");
        res.json([]);
    }
});

router.get("/:id", async (req, res) => {
    let data = await get_detail(req.params.id);
    res.json(data);
});

router.get("/similar/:id", async (req, res) => {
    try {
        console.log("got similar");
        let malData = await axios.get(
            "https://api.myanimelist.net/v2/manga/"
            +req.params.id
            +"?fields=related_manga", {
                headers: {
                    "X-MAL-CLIENT-ID": config.keys.mal
                }
            }
        );
        let results = [];
        for (const title of malData.data.related_manga.slice(0, 10)) {
            let id = title.node.id;
            let data = await get_detail(id);
            results.push(data);
        }
        res.json(results);
    } catch (err) {
        res.json([]);
    }
});

async function get_detail(id) {
    try {
        console.log("got detail");
        let titleMAL = await axios.get(
            "https://api.myanimelist.net/v2/manga/"
            + id
            + "?fields=id,title,main_picture,start_date,synopsis,mean", {
                headers: {
                    "X-MAL-CLIENT-ID": config.keys.mal
                }
            }
        );
        let title = titleMAL.data;

        const result = {
            id: title.id,
            name: title.title,
            original_name: title.title,
            image: title.main_picture.medium,
            description: title.synopsis,
            released: title.start_date,
            rating: title.mean,
            rating_top: 10,
        };
        return result;

    } catch (err) {
        return [];
    }
}

module.exports = router;
