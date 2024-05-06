import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import HomeUpperTabs from "../components/HomeScreenComponents/HomeComponent";
import HomeBottomTabs from "../components/HomeScreenComponents/HomeBottomTabs";
import DocumentScanner from "react-native-document-scanner-plugin";
import UploadImage from "../components/HomeScreenComponents/UploadImage";
import BillsComponents from "../components/HomeScreenComponents/BillsComponents";
import HomeComponent from "../components/HomeScreenComponents/HomeComponent";
import RewardComponent from "../components/HomeScreenComponents/RewardComponent";
import WarrantComponent from "../components/HomeScreenComponents/WarrantComponent";

const HomeScreen = ({ navigation }) => {
  const [scannedImage, setScannedImage] = useState("");
  const [tab, setTab] = useState("home");

  const scanDocument = async () => {
    const { scannedImages } = await DocumentScanner.scanDocument({});

    if (scannedImages?.length > 0) {
      setScannedImage(scannedImages[0]);
    }
  };

  return (
    <View style={tw`bg-[#000] h-full flex justify-between`}>
      <View style={tw`h-[90%]`}>
        {tab === "home" && (
          <View>
            <HomeComponent setTab={setTab} navigation={navigation} />
          </View>
        )}
        {tab === "bills" && (
          <View>
            <BillsComponents setTab={setTab} navigation={navigation} />
          </View>
        )}
        {tab === "add" && (
          <View>
            {scannedImage && (
              <UploadImage
                scannedImage={scannedImage}
                setScannedImage={setScannedImage}
              />
            )}
          </View>
        )}
        {tab === "reward" && (
          <View>
            <RewardComponent setTab={setTab} navigation={navigation} />
          </View>
        )}
        {tab === "warrant" && (
          <View>
            <WarrantComponent setTab={setTab} navigation={navigation} />
          </View>
        )}
      </View>
      <View style={tw`h-[10%]`}>
        <HomeBottomTabs
          tab={tab}
          navigation={navigation}
          scannedImage={scannedImage}
          setScannedImage={setScannedImage}
          scanDocument={scanDocument}
          setTab={setTab}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
