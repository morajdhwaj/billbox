import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import DocumentScanner from "react-native-document-scanner-plugin";

const HomeBottomTabs = ({ scanDocument, setTab, tab }) => {
  handleAddDocs = () => {
    scanDocument();
    setTab("add");
  };

  return (
    <View style={tw`px-5 bg-[#202020] flex flex-row justify-between  h-full`}>
      <TouchableOpacity onPress={() => setTab("home")}>
        <View style={tw`flex items-center justify-center`}>
          <View>
            {tab === "home" ? (
              <Image
                source={require("../../assets/images/home-active.png")}
                ImageBackground
                style={tw`h-12 w-12 rounded-full`}
              />
            ) : (
              <Image
                source={require("../../assets/images/home.png")}
                ImageBackground
                style={tw`h-12 w-12 rounded-full`}
              />
            )}
          </View>
          <Text style={tw`${tab == "home" && "text-white"} text-xs`}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTab("bills")}>
        <View style={tw`flex items-center justify-center`}>
          <View>
            {tab === "bills" ? (
              <Image
                source={require("../../assets/images/bills-active.png")}
                ImageBackground
                style={tw`h-12 w-12 rounded-full`}
              />
            ) : (
              <Image
                source={require("../../assets/images/bills.png")}
                ImageBackground
                style={tw`h-12 w-12 rounded-full`}
              />
            )}
          </View>
          <Text style={tw`${tab == "bills" && "text-white"} text-xs`}>
            Bills
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAddDocs}>
        <View style={tw`flex  items-center justify-end  `}>
          <View>
            {tab === "add" ? (
              <Image
                source={require("../../assets/images/add-active.png")}
                ImageBackground
                style={tw`h-24 w-24 rounded-full`}
              />
            ) : (
              <Image
                source={require("../../assets/images/add.png")}
                ImageBackground
                style={tw`h-24 w-24 rounded-full`}
              />
            )}
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTab("reward")}>
        <View style={tw`flex items-center justify-center`}>
          <View>
            {tab === "reward" ? (
              <Image
                source={require("../../assets/images/reward-active.png")}
                ImageBackground
                style={tw`h-12 w-12 rounded-full`}
              />
            ) : (
              <Image
                source={require("../../assets/images/reward.png")}
                ImageBackground
                style={tw`h-12 w-12 rounded-full`}
              />
            )}
          </View>
          <Text style={tw`${tab == "reward" && "text-white"} text-xs`}>
            Reward
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTab("warrant")}>
        <View style={tw`flex items-center justify-center`}>
          <View>
            {tab === "warrant" ? (
              <Image
                source={require("../../assets/images/warrant-active.png")}
                ImageBackground
                style={tw`h-12 w-12 rounded-full`}
              />
            ) : (
              <Image
                source={require("../../assets/images/warrant.png")}
                ImageBackground
                style={tw`h-12 w-12 rounded-full`}
              />
            )}
          </View>
          <Text style={tw`${tab == "warrant" && "text-white"} text-xs`}>
            Warrant
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeBottomTabs;
