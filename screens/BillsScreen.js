import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const BillsScreen = () => {
  return (
    <View style={tw`text-black w-full`}>
      <Text style={tw`text-black`}>BillsScreen</Text>
      <View style={tw`  mt-10 mx-5`}>
        <Text style={tw`text-black`}>Bill Name</Text>

        <Image
          source={require("../assets/images/intro-1.jpeg")}
          style={tw`w-full `}
        />
      </View>
    </View>
  );
};

export default BillsScreen;
