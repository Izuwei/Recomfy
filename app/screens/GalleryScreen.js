import React, { memo } from "react";

import TopTabNavigation from "../components/TopTabNavigation";

const GalleryScreen = memo(({ navigation, route }) => {
  return (
    <TopTabNavigation
      navigation={navigation}
      route={route}
      initialRouteName={route.params.initialRouteName}
      data={route.params.data}
    />
  );
});

export default GalleryScreen;
