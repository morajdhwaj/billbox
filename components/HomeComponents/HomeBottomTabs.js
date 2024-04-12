import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import DocumentScanner from "react-native-document-scanner-plugin";

const HomeBottomTabs = () => {
  const [scannedImage, setScannedImage] = useState();

  const scanDocument = async () => {
    const { scannedImages } = await DocumentScanner.scanDocument({});

    if (scannedImages?.length > 0) {
      setScannedImage(scannedImages[0]);
    }
  };

  return (
    <View style={tw`p-5 mx-5 flex flex-row justify-between`}>
      <TouchableOpacity>
        <FontAwesome6 name="receipt" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => scanDocument()}>
        <AntDesign name="pluscircle" size={50} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="payment" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeBottomTabs;
