import {getUuid} from "./uuid";
import axios from "axios";
import config from "../../config.json";

export const getBookmarks = async () => {

    let uniqueId = await getUuid();

    try {
        const res = await axios.get(
            config.api_url + ":" + config.api_port + "/recommendation/getBookmarks",
            {
                params: {
                    userId: uniqueId
                },
            }
        );
        console.log(res.data);
        var data = [];
        for (const item of res.data) {
            let split = item.itemId.split('_');
            let category = split[0];
            let id = split.slice(1).join("_");
            let detail = null;
            switch (category) {
                case "movie":
                    detail = await get_movie_detail(id);
                    break;
                case "serial":
                    detail = await get_serial_detail(id);
                    break;
                case "game":
                    detail = await get_game_detail(id);
                    break;
                default:
                    console.log("error - unknown category")
            }
            if (detail)
            {
                data.push({
                    key: id,
                    type: category,
                    title: detail.name,
                    image: detail.image,
                    description: detail.description,
                    rating: detail.rating + "/" + detail.rating_top,
                });
            }
        }
        console.log(data);
        return data;
    } catch (err) {
        console.log("err");
        return [];
    }
};

export const getRecommendations = async () => {

    let uniqueId = await getUuid();
    const categories = ["movie", "serial", "game", "book", "anime", "manga"];
    let data_out = {};

    for (const category of categories) {
        try {
            const res = await axios.get(
                config.api_url + ":" + config.api_port + "/recommendation/getRecommendations",
                {
                    params: {
                        userId: uniqueId,
                        category: category
                    },
                }
            );
            console.log(res.data);
            var data = [];
            for (const item of res.data) {
                let split = item.itemId.split('_');
                let category = split[0];
                let id = split.slice(1).join("_");
                let detail = null;
                switch (category) {
                    case "movie":
                        detail = await get_movie_detail(id);
                        break;
                    case "serial":
                        detail = await get_serial_detail(id);
                        break;
                    case "game":
                        detail = await get_game_detail(id);
                        break;
                    case "book":
                        break;
                    case "anime":
                        break;
                    case "manga":
                        break;
                    default:
                        console.log("error - unknown category")
                }
                if (detail)
                {
                    data.push({
                        key: id,
                        type: category,
                        title: detail.name,
                        image: detail.image,
                        description: detail.description,
                        rating: detail.rating + "/" + detail.rating_top,
                    });
                }
            }
            console.log(data);
            data_out[category] = data;
        } catch (err) {
            console.log("err in category: " + category);
            data_out[category] = [];
        }
    }
    return data_out;

};

async function get_movie_detail(id) {
    try {
        const res = await axios.get(
            config.api_url + ":" + config.api_port + "/movies/" +id);
        return res.data;
    } catch (err) {
        console.log("err");
        return null;
    }
}

async function get_serial_detail(id) {
    try {
        const res = await axios.get(
            config.api_url + ":" + config.api_port + "/serials/" +id);
        return res.data;
    } catch (err) {
        console.log("err");
        return null;
    }
}

async function get_game_detail(id) {
    try {
        const res = await axios.get(
            config.api_url + ":" + config.api_port + "/games/" +id);
        return res.data;
    } catch (err) {
        console.log("err");
        return null;
    }
}