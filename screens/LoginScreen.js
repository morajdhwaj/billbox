import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import AntDesign from "react-native-vector-icons/AntDesign";

const LoginScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState("");

  return (
    <View style={tw`h-full bg-[#000]`}>
      <View
        style={tw`flex flex-row w-full items-center justify-between px-5 mt-5`}
      >
        <View style={tw`flex flex-row gap-5 items-center `}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`mt-10 `}>
        <Text style={tw`text-white text-2xl m-5 font-semibold `}>
          Enter your mobile number to get OTP
        </Text>
      </View>
      <View style={tw` bg-black py-5 rounded-xl px-4`}>
        <Text style={tw`text-white text-xl  font-semibold`}>Mobile number</Text>
        <View style={tw`border border-gray-600 rounded-xl`}>
          <TextInput
            style={tw`  text-white  font-semibold  `}
            keyboardType="phone-pad"
            onChangeText={setMobileNumber}
            value={mobileNumber}
            maxLength={10}
          />
        </View>
        <TouchableOpacity
          style={tw`bg-[#9DE9D7] mt-10 rounded-xl`}
          onPress={() => navigation.navigate("LoginOTPScreen")}
        >
          <Text style={tw`text-black text-2xl self-center font-bold py-2 `}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
