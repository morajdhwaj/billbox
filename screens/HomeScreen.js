import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import HomeUpperTabs from "../components/HomeComponents/HomeUpperTabs";
import HomeBottomTabs from "../components/HomeComponents/HomeBottomTabs";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={tw`bg-[#121212] h-full flex justify-between`}>
      <HomeUpperTabs navigation={navigation} />
      <HomeBottomTabs navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
