import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import HomeUpperTabs from "../components/HomeComponents/HomeUpperTabs";
import HomeBottomTabs from "../components/HomeComponents/HomeBottomTabs";
import DocumentScanner from "react-native-document-scanner-plugin";
import UploadImage from "../components/HomeComponents/UploadImage";

const HomeScreen = ({ navigation }) => {
  const [scannedImage, setScannedImage] = useState();

  const scanDocument = async () => {
    const { scannedImages } = await DocumentScanner.scanDocument({});

    if (scannedImages?.length > 0) {
      setScannedImage(scannedImages[0]);
    }
  };

  return (
    <View style={tw`bg-[#121212] h-full flex justify-between`}>
      <HomeUpperTabs navigation={navigation} />
      {scannedImage && <UploadImage scannedImage={scannedImage} />}
      <HomeBottomTabs
        navigation={navigation}
        scannedImage={scannedImage}
        setScannedImage={setScannedImage}
        scanDocument={scanDocument}
      />
    </View>
  );
};

export default HomeScreen;
