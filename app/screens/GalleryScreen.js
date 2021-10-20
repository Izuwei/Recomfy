import React from "react";

import TopTabNavigation from "../components/TopTabNavigation";

const GalleryScreen = ({ navigation, route }) => {
  return (
    <TopTabNavigation
      navigation={navigation}
      route={route}
      initialRouteName={route.params.initialRouteName}
      data={route.params.data}
    />
  );
};

export default GalleryScreen;
