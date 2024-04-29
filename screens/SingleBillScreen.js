import React from "react";
import { View } from "react-native";
import ImageZoomViewer from "react-native-image-zoom-viewer";

const SingleBillScreen = ({ route }) => {
  const imageUrl = route?.params?.imageUrl;

  return (
    <View style={{ flex: 1 }}>
      <ImageZoomViewer
        imageUrls={[{ url: imageUrl }]}
        enableSwipeDown
        enablePreload
        style={{ flex: 1 }}
        renderIndicator={() => null}
      />
    </View>
  );
};

export default SingleBillScreen;
