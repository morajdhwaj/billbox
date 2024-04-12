import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={tw``}>
      <Text style={tw`text-black`}>LoginScreen</Text>
      <TouchableOpacity>
        <Text
          style={tw`mt-5 text-red-500`}
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        >
          Forgot Password
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
