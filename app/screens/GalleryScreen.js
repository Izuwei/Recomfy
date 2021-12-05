import React, { useContext } from "react";

import TopTabNavigation from "../components/TopTabNavigation";
import { DataContext } from "../utils/DataProvider";

const GalleryScreen = ({ navigation, route }) => {
  const { favorites } = useContext(DataContext);

  return (
    <TopTabNavigation
      navigation={navigation}
      route={route}
      initialRouteName={route.params.initialRouteName}
      data={favorites}
    />
  );
};

export default GalleryScreen;
