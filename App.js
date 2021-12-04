import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";

import "./app/utils/i18n";
import { ThemeProvider } from "./app/utils/ThemeProvider";
import NavigationOverlay from "./app/components/NavigationOverlay";

/**Dummy */
const fetchFilms = () => {
  return [
    /*{
      key: "1",
      type: "movie",
      title: "Steve Jobs",
      image:
        "data:image/jpeg;base64,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",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "2",
      type: "movie",
      title: "Intouchables",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },

    {
      key: "3",
      type: "movie",
      title: "Forrest Gump",
      image:
        "https://img.csfd.cz/files/images/user/profile/159/083/159083954_7a89b5.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "4",
      type: "movie",
      title: "The Martian",
      image: "https://cdn.knihcentrum.cz/98537051_the-martian.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "5",
      type: "movie",
      title: "Halloween Kills",
      image:
        "https://m.media-amazon.com/images/M/MV5BM2RmMGY2Y2UtNjA1NS00NGE4LThiNzItMmE1NTk5NzI5NmE0XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_FMjpg_UX1000_.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "6",
      type: "movie",
      title: "Titanic",
      image:
        "https://www.themoviedb.org/t/p/original/6MB3BlevLWRv4zDT4VicZETsOKc.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "7",
      type: "movie",
      title: "Avatar",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8Y7WrRK1iQHEX7UIftBeBMjPjWD.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },

    {
      key: "8",
      title: "Megamind",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/b38dc4247787611ab183dbd94e1e7a005e044d0e137461660b22bc1c5149c3a6._RI_V_TTW_.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "9",
      title: "Ice Age",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gLhHHZUzeseRXShoDyC4VqLgsNv.jpg",
      description:
        "Back when the Earth was being overrun by glaciers, and animals were scurrying to save themselves from the upcoming Ice Age, a sloth named Sid, a woolly mammoth named Manny, and a saber-toothed tiger named Diego are forced to become unlikely heroes. The three reluctantly come together when they have to return a human child to its father while braving the deadly elements of the impending Ice Age.",
      rating: "10/10",
    },
    {
      key: "10",
      title: "Alcatraz",
      image:
        "https://image.pmgstatic.com/cache/resized/w140/files/images/film/posters/162/566/162566369_6ebd11.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "11",
      title: "Fast and Furious",
      image:
        "https://static.wikia.nocookie.net/fastandfurious/images/0/04/The_Fast_and_the_Furious_%28DVD_Cover%29.jpeg/revision/latest?cb=20150501043627",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "12",
      title: "Avengers",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },*/
  ];
};

/**Dummy */
const fetchSerials = () => {
  return [
    {
      key: "1",
      type: "serial",
      title: "You",
      image:
        "https://tr.web.img3.acsta.net/pictures/18/12/31/02/49/2373131.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "2",
      type: "serial",
      title: "Maid",
      image:
        "https://resizing.flixster.com/SnbkkLgIHi6ztbY0bztlE-JExkQ=/ems.ZW1zLXByZC1hc3NldHMvdHZzZWFzb24vMjg1OGRiYTgtODYwMy00ZWUxLTg5ZTctZDA3MDA0MTYyZmEwLmpwZw==",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "3",
      type: "serial",
      title: "Squid Game",
      image: "https://flxt.tmsimg.com/assets/p20492218_b_v13_ab.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "4",
      type: "serial",
      title: "The Witcher",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "5",
      type: "serial",
      title: "Chernobyl",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
  ];
};

/**Dummy */
const fetchBooks = () => {
  return [
    {
      key: "1",
      type: "book",
      title: "Les Miserables",
      image: "https://i.cdn.nrholding.net/44455440/1000/1000",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "2",
      type: "book",
      title: "Jane Eyre",
      image:
        "https://www.antikavion.cz/storage/images/jane-eyre-jana-eyrova-charlotte-bront-1999-144820-0.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "3",
      type: "book",
      title: "Hunger Games",
      image:
        "https://images-ext-1.discordapp.net/external/IHmtjH4b0ddblGUfwohSws2W42OZ3fWNLywfJa8-KDo/https/images-na.ssl-images-amazon.com/images/I/61JfGcL2ljL.jpg?width=389&height=589",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "4",
      type: "book",
      title: "Martin Eden",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d8/Ed1909-MartinEden.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "5",
      type: "book",
      title: "Harry Potter",
      image:
        "https://dryuc24b85zbr.cloudfront.net/tes/resources/6441170/image?width=500&height=500&version=1474643904786",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
  ];
};

/**Dummy */
const fetchGames = () => {
  return [
    {
      key: "1",
      type: "game",
      title: "Cyberpunk 2077",
      image: "https://i.cdn.nrholding.net/52339217/1000/1000",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "2",
      type: "game",
      title: "Far Cry 6",
      image:
        "https://image.api.playstation.com/vulcan/img/rnd/202106/1514/xqoTYwf0S55ro6fwcIIY1KI4.png",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },

    {
      key: "3",
      title: "Heavy Rain",
      image:
        "https://image.api.playstation.com/vulcan/img/rnd/202011/0518/rfaNTagTT8uQV0YfxNNLbzr0.png",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "4",
      title: "Tomb Raider",
      image:
        "https://store-images.s-microsoft.com/image/apps.49298.13510798886621078.d9c26d6d-0bcd-412a-9ac7-49a02514c594.915ad0ab-5909-4fcc-a775-66c76113f016",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "5",
      title: "Fallout 4",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202009/2419/BWMVfyxONkIAlAJVQd96qPuN.png",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
  ];
};

/**Dummy */
const fetchAnime = () => {
  return [
    {
      key: "1",
      type: "anime",
      title: "Nanatsu no taizai",
      image:
        "https://cdn.myanimelist.net/images/anime/8/65409.jpg?s=9045a2ed86abe77a6b24f0ad7f114485",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "2",
      type: "anime",
      title: "Violet Evergarden",
      image:
        "https://www.serialzone.cz/obrazky/plakaty/violet-evergarden-3130.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "3",
      type: "anime",
      title: "Naruto",
      image: "https://kukaj.to/media/tv-shows/s612bca4f7edf6.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "4",
      type: "anime",
      title: "Death note",
      image:
        "https://static.posters.cz/image/750/plakaty/death-note-from-the-shadows-i58005.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "5",
      type: "anime",
      title: "Attack On Titan",
      image:
        "https://cdn.knihcentrum.cz/98536752_attack-on-titan-volume-04_400.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
  ];
};

/**Dummy */
const fetchManga = () => {
  return [
    {
      key: "1",
      type: "manga",
      title: "Solo Leveling",
      image:
        "https://bookshop.vshcdn.net/little-brown-company/solo-leveling-vol-1-manga-_id6236803.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "2",
      type: "manga",
      title: "Overgeared",
      image:
        "https://overgeared-manga.com/wp-content/uploads/2020/04/Overgeared-img2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "3",
      type: "manga",
      title: "Spirit farmer",
      image:
        "https://www.asurascans.com/wp-content/uploads/2020/10/poster022.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "4",
      type: "manga",
      title: "Long Live King",
      image:
        "https://toonily.net/wp-content/uploads/2020/07/Long-Live-The-King-MAnga-e1594422963278.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "5",
      type: "manga",
      title: "Memorize",
      image:
        "https://lordmanga.com/wp-content/uploads/2021/03/Memorize-193x278.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
  ];
};

export default function App() {
  return (
    <ThemeProvider>
      <StatusBar style="light" />
      <NavigationOverlay
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
        }}
      />
    </ThemeProvider>
  );
}
