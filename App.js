import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import NavBar from "./app/components/NavBar";

/**Dummy */
const fetchFilms = () => {
  return [
    {
      key: "1",
      text: "Film 1",
      uri: "https://picsum.photos/id/1/200",
    },
    {
      key: "2",
      text: "Film 2",
      uri: "https://picsum.photos/id/10/200",
    },

    {
      key: "3",
      text: "Film 3",
      uri: "https://picsum.photos/id/1002/200",
    },
    {
      key: "4",
      text: "Film 4",
      uri: "https://picsum.photos/id/1006/200",
    },
    {
      key: "5",
      text: "Film 5",
      uri: "https://picsum.photos/id/1008/200",
    },
    {
      key: "6",
      text: "Film 6",
      uri: "https://picsum.photos/id/1/200",
    },
    {
      key: "7",
      text: "Film 7",
      uri: "https://picsum.photos/id/10/200",
    },

    {
      key: "8",
      text: "Film 8",
      uri: "https://picsum.photos/id/1002/200",
    },
    {
      key: "9",
      text: "Film 9",
      uri: "https://picsum.photos/id/1006/200",
    },
    {
      key: "10",
      text: "Film 10",
      uri: "https://picsum.photos/id/1008/200",
    },
  ];
};

/**Dummy */
const fetchSerials = () => {
  return [
    {
      key: "1",
      text: "Serial 1",
      uri: "https://picsum.photos/id/1011/200",
    },
    {
      key: "2",
      text: "Serial 2",
      uri: "https://picsum.photos/id/1012/200",
    },
    {
      key: "3",
      text: "Serial 3",
      uri: "https://picsum.photos/id/1013/200",
    },
    {
      key: "4",
      text: "Serial 4",
      uri: "https://picsum.photos/id/1015/200",
    },
    {
      key: "5",
      text: "Serial 5",
      uri: "https://picsum.photos/id/1016/200",
    },
  ];
};

/**Dummy */
const fetchBooks = () => {
  return [
    {
      key: "1",
      text: "Book 1",
      uri: "https://picsum.photos/id/1020/200",
    },
    {
      key: "2",
      text: "Book 2",
      uri: "https://picsum.photos/id/1024/200",
    },
    {
      key: "3",
      text: "Book 3",
      uri: "https://picsum.photos/id/1027/200",
    },
    {
      key: "4",
      text: "Book 4",
      uri: "https://picsum.photos/id/1035/200",
    },
    {
      key: "5",
      text: "Book 5",
      uri: "https://picsum.photos/id/1038/200",
    },
  ];
};

/**Dummy */
const fetchGames = () => {
  return [
    {
      key: "1",
      text: "Game 1",
      uri: "https://picsum.photos/id/1/200",
    },
    {
      key: "2",
      text: "Game 2",
      uri: "https://picsum.photos/id/10/200",
    },

    {
      key: "3",
      text: "Game 3",
      uri: "https://picsum.photos/id/1002/200",
    },
    {
      key: "4",
      text: "Game 4",
      uri: "https://picsum.photos/id/1006/200",
    },
    {
      key: "5",
      text: "Game 5",
      uri: "https://picsum.photos/id/1008/200",
    },
  ];
};

/**Dummy */
const fetchAnime = () => {
  return [
    {
      key: "1",
      text: "Anime 1",
      uri: "https://picsum.photos/id/1011/200",
    },
    {
      key: "2",
      text: "Anime 2",
      uri: "https://picsum.photos/id/1012/200",
    },
    {
      key: "3",
      text: "Anime 3",
      uri: "https://picsum.photos/id/1013/200",
    },
    {
      key: "4",
      text: "Anime 4",
      uri: "https://picsum.photos/id/1015/200",
    },
    {
      key: "5",
      text: "Anime 5",
      uri: "https://picsum.photos/id/1016/200",
    },
  ];
};

/**Dummy */
const fetchManga = () => {
  return [
    {
      key: "1",
      text: "Manga 1",
      uri: "https://picsum.photos/id/1020/200",
    },
    {
      key: "2",
      text: "Manga 2",
      uri: "https://picsum.photos/id/1024/200",
    },
    {
      key: "3",
      text: "Manga 3",
      uri: "https://picsum.photos/id/1027/200",
    },
    {
      key: "4",
      text: "Manga 4",
      uri: "https://picsum.photos/id/1035/200",
    },
    {
      key: "5",
      text: "Manga 5",
      uri: "https://picsum.photos/id/1038/200",
    },
  ];
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <NavBar
        recommendations={{
          films: fetchFilms(),
          serials: fetchSerials(),
          books: fetchBooks(),
          games: fetchGames(),
          anime: fetchAnime(),
          manga: fetchManga(),
        }}
        favorites={{
          films: fetchFilms(),
          serials: fetchSerials(),
          books: fetchBooks(),
          games: fetchGames(),
          anime: fetchAnime(),
          manga: [
            {
              key: "4",
              text: "Manga 4",
              uri: "https://picsum.photos/id/1035/200",
            },
            {
              key: "5",
              text: "Manga 5",
              uri: "https://picsum.photos/id/1038/200",
            },
          ],
        }}
      />
    </NavigationContainer>
  );
}
