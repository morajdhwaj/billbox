import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";

const HomeUpperTabs = ({ navigation }) => {
  return (
    <View style={tw`p-5 flex flex-row justify-between`}>
      <View style={tw`flex flex-row items-center gap-4`}>
        <Image
          source={require("../../assets/images/billbox-logo.jpeg")}
          ImageBackground
          style={tw`h-10 w-10 rounded-full`}
        />
        <Text style={tw`text-white text-2xl font-bold`}>Bills</Text>
      </View>
      <View style={tw`flex flex-row items-center gap-4`}>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeSearchScreen")}
        >
          <AntDesign name="search1" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ScannerScreen")}>
          <MaterialIcons name="qr-code-scanner" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="user-circle" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeUpperTabs;
