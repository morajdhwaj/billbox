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
        <TouchableOpacity
          onPress={() => navigation.navigate("UserScreen")}
          style={tw``}
        >
          <View style={tw`flex-row gap-3 items-center `}>
            <View>
              <FontAwesome name="user-circle" size={40} color="#9DE9D7" />
            </View>
            <View>
              <Text style={tw`text-white text-lg font-semibold`}>
                User Name
              </Text>
              <Text style={tw`text-white text-xs`}>Account details</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("UserScreen")}>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <View style={tw` flex gap-2`}>
        <View
          style={tw`flex flex-row justify-between  border-b border-gray-900 p-5`}
        >
          <View style={tw`flex flex-row items-center gap-5`}>
            <View style={tw`bg-[#1d1d1d] p-2 rounded-full`}>
              <AntDesign name="gift" size={20} color="#9DE9D7" />
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
          <TouchableOpacity
            style={tw`flex flex-row items-center gap-5`}
            onPress={() => navigation.navigate("RedeemScreen")}
          >
            <View style={tw`bg-[#1d1d1d] p-2 rounded-full`}>
              <FontAwesome5 name="wallet" size={20} color="#9DE9D7" />
            </View>
            <View>
              <Text style={tw`text-white text-lg font-semibold`}>Redeem</Text>
              <Text style={tw`text-white text-xs`}>xxxxxxxxx</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={tw`flex flex-row justify-between  border-b border-gray-900 p-5`}
        >
          <TouchableOpacity
            style={tw`flex flex-row items-center gap-5`}
            onPress={() => navigation.navigate("BillsScreen")}
          >
            <View style={tw`bg-[#1d1d1d] p-2 rounded-full`}>
              <MaterialIcons name="receipt" size={20} color="#9DE9D7" />
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
          <TouchableOpacity
            style={tw`flex flex-row items-center gap-5`}
            onPress={() => navigation.navigate("UPIScreen")}
          >
            <View style={tw`bg-[#1d1d1d] p-2 rounded-full`}>
              <MaterialIcons name="money" size={20} color="#9DE9D7" />
            </View>
            <View>
              <Text style={tw`text-white text-lg font-semibold`}>
                UPI Details
              </Text>
              <Text style={tw`text-white text-xs`}>
                Bank & AutoPay Mandates
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={tw`flex flex-row justify-between  border-b border-gray-900 p-5`}
        >
          <TouchableOpacity style={tw`flex flex-row items-center gap-5`}>
            <View style={tw`bg-[#1d1d1d] p-2 rounded-full`}>
              <MaterialIcons name="call" size={20} color="#9DE9D7" />
            </View>
            <View>
              <Text style={tw`text-white text-lg font-semibold`}>
                Customer Support 24x7
              </Text>
              <Text style={tw`text-white text-xs`}>
                Bank & AutoPay Mandates
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={tw`flex flex-row justify-between  border-b border-gray-900 p-5`}
        >
          <TouchableOpacity
            style={tw`flex flex-row items-center gap-5`}
            onPress={() => navigation.navigate("NotificationScreen")}
          >
            <View style={tw`bg-[#1d1d1d] p-2 rounded-full`}>
              <MaterialIcons name="notifications" size={20} color="#9DE9D7" />
            </View>
            <View>
              <Text style={tw`text-white text-lg font-semibold`}>
                Notification
              </Text>
              <Text style={tw`text-white text-xs`}>Show all Notifications</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
