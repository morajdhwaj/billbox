import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import AntDesign from "react-native-vector-icons/AntDesign";

const HomeSearchScreen = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <View style={tw`bg-black h-full`}>
      <View style={tw`flex flex-row w-full items-center px-5`}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        <TextInput
          style={tw` px-5  text-white text-[4] w-full  `}
          placeholder="Search bills"
          placeholderTextColor="#999999"
          onChangeText={setSearchInput}
          value={searchInput}
          maxLength={10}
        />
      </View>
      <View style={tw`p-5`}>
        <View style={tw`flex`}>
          <View style={tw`flex flex-row items-center `}>
            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
              <AntDesign name="arrowleft" size={30} color="white" />
            </TouchableOpacity>
            <Text>Company Name</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeSearchScreen;
