import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";

const LoginScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState("");

  return (
    <View style={tw`h-full bg-[#202832]`}>
      <View style={tw`mt-10 `}>
        <Text style={tw`text-[#9DE9D7] text-6xl m-5 font-bold `}>
          Welcome Back
        </Text>
      </View>
      <View style={tw`m-5 bg-[#19202A] py-5 rounded-xl px-4`}>
        <Text style={tw`text-[#565E6A] text-2xl  font-bold`}>
          Mobile number
        </Text>
        <TextInput
          style={tw`border-b-2 border-b-gray-400 text-3xl  text-white  font-bold  px-5`}
          keyboardType="phone-pad"
          onChangeText={setMobileNumber}
          value={mobileNumber}
          maxLength={10}
        />
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
