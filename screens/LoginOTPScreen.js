import React, { useState, useRef } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

const LoginOTPScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpInputs = useRef([]);

  const handleInputChange = (index, value) => {
    if (isNaN(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "") {
      focusNextInput(index);
    }
  };

  const focusNextInput = (index) => {
    if (index < otp.length - 1) {
      otpInputs.current[index + 1].focus();
    }
  };

  const focusPrevInput = (index) => {
    if (index > 0) {
      otpInputs.current[index - 1].focus();
    }
  };

  const handleInputKeyPress = (index, key) => {
    if (key === "Backspace" && otp[index] === "") {
      focusPrevInput(index);
    }
  };

  return (
    <View style={tw`h-full bg-[#202832]`}>
      <View style={tw`mt-10 `}>
        <Text style={tw`text-[#9DE9D7] text-6xl m-5 font-bold `}>Verify</Text>
      </View>
      <View style={tw` w-full py-5 rounded-xl `}>
        <Text style={tw`text-[#565E6A] text-xl  ml-5 font-bold`}>
          We have sent OTP to your number
        </Text>
        <View style={tw`flex flex-row items-center justify-center mt-5 gap-5`}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={tw`bg-[#19202A] w-16 text-center text-4xl text-[#9DE9D7] font-bold rounded-lg`}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleInputChange(index, text)}
              onKeyPress={({ nativeEvent: { key } }) =>
                handleInputKeyPress(index, key)
              }
              ref={(ref) => (otpInputs.current[index] = ref)}
            />
          ))}
        </View>
      </View>
      <Text style={tw`text-[#565E6A]  self-center  mt-5 font-semibold`}>
        Resend OTP?
      </Text>
      <TouchableOpacity
        style={tw`bg-[#9DE9D7] mt-10 rounded-xl mx-5`}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={tw`text-black text-2xl self-center font-bold py-2 `}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginOTPScreen;
