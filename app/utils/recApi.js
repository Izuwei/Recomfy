import {getUuid} from "./uuid";
import axios from "axios";
import config from "../../config.json";

export const getBookmarks = async () => {

    let uniqueId = await getUuid();


    try {
        const res = await axios.get(
            config.api_url + ":" + config.api_port + "/recommendation/getBookmark",
            {
                params: {
                    userId: uniqueId
                },
            }
        );
        var data = [];
        res.data.forEach((item) => {
            let split = item.itemId.split('_');
            let category = split[0];
            let id = split.slice(1).join("_");


            data.push({
                key: id,
                type: category,
                title: item.name,
                image: item.image,
                description: item.overview,
                rating: item.rating + "/" + item.rating_top,
            });
        });
        console.log("ok");
    } catch (err) {
        console.log("err");
    }
};