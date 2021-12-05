import React, { useEffect, useState } from "react";

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const [recommendations, setRecommendations] = useState({
    films: [],
    serials: [],
    books: [],
    games: [],
    anime: [],
    manga: [
      {
        key: "4",
        type: "manga",
        title: "Second life ranker",
        image:
          "https://www.anime-planet.com/images/manga/covers/38288.jpg?t=1628880491",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
        rating: "8/10",
      },
      {
        key: "5",
        type: "manga",
        title: "Dark mortal",
        image:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1602079904l/55589625._SX318_.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
        rating: "8/10",
      },
    ],
  });
  const [favorites, setFavorites] = useState({
    films: [],
    serials: [],
    books: [],
    games: [],
    anime: [],
    manga: [
      {
        key: "4",
        type: "manga",
        title: "Second life ranker",
        image:
          "https://www.anime-planet.com/images/manga/covers/38288.jpg?t=1628880491",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
        rating: "8/10",
      },
      {
        key: "5",
        type: "manga",
        title: "Dark mortal",
        image:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1602079904l/55589625._SX318_.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
        rating: "8/10",
      },
    ],
  });

  const isFavorite = (title) => {
    console.log("Ahoj");
  };

  return (
    <DataContext.Provider
      value={{
        recommendations: recommendations,
        favorites: favorites,
        isFavorite: isFavorite,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
