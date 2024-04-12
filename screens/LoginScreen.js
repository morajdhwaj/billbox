import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={tw``}>
      <TouchableOpacity>
        <Text
          style={tw`mt-5 text-black`}
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        >
          Home Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
