import React, { useEffect, useState } from "react";
import {getBookmarks, getRecommendations} from "./recApi";
import {getUuid} from "./uuid";
import axios from "axios";
import config from "../../config.json";

export const DataContext = React.createContext();


export const DataProvider = ({ children }) => {
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
    fetchData().then( (ret) => {
      let fav = {};
      fav.films = ret.filter( item => item.type == "movie");
      fav.serials = ret.filter( item => item.type == "serial");
      fav.books = ret.filter( item => item.type == "book");
      fav.games = ret.filter( item => item.type == "game");
      fav.anime = ret.filter( item => item.type == "anime");
      fav.manga = ret.filter( item => item.type == "manga");
      setFavorites(fav);
    })
    async function fetchDataRec() {
      return await getRecommendations();
    }
    fetchDataRec().then( (ret) => {
      let rec = {};
      rec.films = ret.movie;
      rec.serials = ret.serial;
      rec.books = ret.book;
      rec.games = ret.game;
      rec.anime = ret.anime;
      rec.manga = ret.manga;
      setRecommendations(rec);
    })

  },[]);

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
        console.log("error - unknown category")
    }
  }

  const addFavorite = async (title) => {
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
      favorites[category_name].push(title);
      setFavorites(favorites);
    } catch (err) {
      console.log("err");
    }
  }

  const removeFavorite = async (title) => {
    let uniqueId = await getUuid();

    try {
      const res = await axios.get(
          config.api_url + ":" + config.api_port + "/recommendation/removeBookmark",
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
        if (fav.key == title.key)
        {
          favorites[category_name].splice(i, 1);
          setFavorites(favorites);
          return;
        }
      }
      console.log("didnt remove... probably should never happen");
    } catch (err) {
      console.log("err");
    }
  }

  const isFavorite = (title) => {
    let id = title.key;
    let category = title.type;
    let category_name = getCategoryName(title.type);
    for (const fav of favorites[category_name]) {
      if(fav.key == id)
      {
        return true;
      }
    }
    return false;
  };

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
};
