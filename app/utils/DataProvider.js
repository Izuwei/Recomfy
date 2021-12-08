import React, { memo, useCallback, useEffect, useState } from "react";
import { getBookmarks, getRecommendations } from "./recApi";
import { getUuid } from "./uuid";
import axios from "axios";
import config from "../../config.json";

export const DataContext = React.createContext();

const getCategoryName = (category) => {
  switch (category) {
    case "movie":
      return "films";
    case "serial":
      return "serials";
    case "game":
      return "games";
    case "book":
      return "books";
    case "anime":
      return "anime";
    case "manga":
      return "manga";
    default:
      console.log("Error: Unknown category.");
  }
};

export const DataProvider = memo(({ children }) => {
  const [recommendations, setRecommendations] = useState({
    films: [],
    serials: [],
    books: [],
    games: [],
    anime: [],
    manga: [],
  });
  const [favorites, setFavorites] = useState({
    films: [],
    serials: [],
    books: [],
    games: [],
    anime: [],
    manga: [],
  });

  useEffect(() => {
    async function fetchData() {
      return await getBookmarks();
    }
    fetchData().then((ret) => {
      let fav = {};
      fav.films = ret.filter((item) => item.type == "movie");
      fav.serials = ret.filter((item) => item.type == "serial");
      fav.books = ret.filter((item) => item.type == "book");
      fav.games = ret.filter((item) => item.type == "game");
      fav.anime = ret.filter((item) => item.type == "anime");
      fav.manga = ret.filter((item) => item.type == "manga");
      setFavorites(fav);
    });
    async function fetchDataRec() {
      return await getRecommendations();
    }
    fetchDataRec().then((ret) => {
      let rec = {};
      rec.films = ret.movie;
      rec.serials = ret.serial;
      rec.books = ret.book;
      rec.games = ret.game;
      rec.anime = ret.anime;
      rec.manga = ret.manga;
      setRecommendations(rec);
    });
  }, []);

  const addFavorite = useCallback(async (title) => {
    let uniqueId = await getUuid();

    try {
      const res = await axios.get(
        config.api_url + ":" + config.api_port + "/recommendation/addBookmark",
        {
          params: {
            itemId: title.key,
            userId: uniqueId,
            category: title.type,
          },
        }
      );

      let category_name = getCategoryName(title.type);

      setFavorites((state) => {
        state[category_name].push(title);
        return state;
      });
    } catch (err) {
      console.log("Unable to store into favorites.");
    }
  }, []);

  const removeFavorite = useCallback(
    async (title) => {
      let uniqueId = await getUuid();

      try {
        const res = await axios.get(
          config.api_url +
            ":" +
            config.api_port +
            "/recommendation/removeBookmark",
          {
            params: {
              itemId: title.key,
              userId: uniqueId,
              category: title.type,
            },
          }
        );
        let category_name = getCategoryName(title.type);
        for (let i = 0; i < favorites[category_name].length; i++) {
          let fav = favorites[category_name][i];
          if (fav.key == title.key) {
            setFavorites((state) => {
              state[category_name].splice(i, 1);
              return state;
            });
            return;
          }
        }
      } catch (err) {
        console.log("Unable to remove title from favorites.");
      }
    },
    [favorites]
  );

  const isFavorite = useCallback(
    (title) => {
      let id = title.key;
      let category = title.type;
      let category_name = getCategoryName(title.type);
      for (const fav of favorites[category_name]) {
        if (fav.key == id) {
          return true;
        }
      }
      return false;
    },
    [favorites]
  );

  return (
    <DataContext.Provider
      value={{
        recommendations: recommendations,
        favorites: favorites,
        isFavorite: isFavorite,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
      }}
    >
      {children}
    </DataContext.Provider>
  );
});
