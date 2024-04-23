import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const SingleBillScreen = ({ route }) => {
  const imageUrl = route?.params?.imageUrl;

  return (
    <View>
      <Image source={{ uri: imageUrl }} style={tw`h-full w-full`} />
    </View>
  );
};

export default SingleBillScreen;
