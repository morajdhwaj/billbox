import { View, Text, TextInput, TouchableOpacity, Share } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={tw`bg-black h-full`}>
      <View style={tw`flex flex-row w-full items-center px-5 mt-5`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={tw`flex flex-row w-full items-center justify-between p-5 border-b border-gray-500`}
      >
        <View>
          <View style={tw`flex-row gap-3 items-center`}>
            <TouchableOpacity>
              <FontAwesome name="user-circle" size={40} color="white" />
            </TouchableOpacity>
            <View>
              <Text style={tw`text-white text-lg font-semibold`}>
                User Name
              </Text>
              <Text style={tw`text-white text-xs`}>Account details</Text>
            </View>
          </View>
        </View>
        <View>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="white" />
        </View>
      </View>
      <View style={tw` flex gap-2`}>
        <View
          style={tw`flex flex-row justify-between  border-b border-gray-900 p-5`}
        >
          <View style={tw`flex flex-row items-center gap-5`}>
            <View style={tw`bg-[#1d1d1d] p-2 rounded-full`}>
              <AntDesign name="gift" size={15} color="white" />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("ReferScreen")}
            >
              <Text style={tw`text-white text-lg font-semibold`}>Refer</Text>
              <Text style={tw`text-white text-xs`}>
                Invite friend on Billbox
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={tw`flex flex-row justify-between  border-b border-gray-900 p-5`}
        >
          <TouchableOpacity style={tw`flex flex-row items-center gap-5`}>
            <View style={tw`bg-[#1d1d1d] p-2 rounded-full`}>
              <FontAwesome5 name="wallet" size={15} color="white" />
            </View>
            <View>
              <Text style={tw`text-white text-lg font-semibold`}>₹660.67</Text>
              <Text style={tw`text-white text-xs`}>Wallet</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={tw`flex flex-row justify-between  border-b border-gray-900 p-5`}
        >
          <TouchableOpacity style={tw`flex flex-row items-center gap-5`}>
            <View style={tw`bg-[#1d1d1d] p-2 rounded-full`}>
              <MaterialIcons name="receipt" size={15} color="white" />
            </View>
            <View>
              <Text style={tw`text-white text-lg font-semibold`}>
                All Bills
              </Text>
              <Text style={tw`text-white text-xs`}>
                Get all bills and details
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={tw`flex flex-row justify-between  border-b border-gray-900 p-5`}
        >
          <TouchableOpacity style={tw`flex flex-row items-center gap-5`}>
            <View style={tw`bg-[#1d1d1d] p-2 rounded-full`}>
              <MaterialIcons name="receipt" size={15} color="white" />
            </View>
            <View>
              <Text style={tw`text-white text-lg font-semibold`}>
                Bank Details
              </Text>
              <Text style={tw`text-white text-xs`}>
                Bank & AutoPay Mandates
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
