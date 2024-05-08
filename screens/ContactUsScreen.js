import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import tw from "twrnc";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ContactUsScreen = ({ navigation }) => {
  return (
    <View style={tw`bg-black h-full`}>
      <View
        style={tw`flex flex-row w-full items-center justify-between px-5 mt-5`}
      >
        <View style={tw`flex flex-row gap-5 items-center `}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color="white" />
          </TouchableOpacity>
          <Text style={tw`text-white text-lg font-semibold`}>Contact Us</Text>
        </View>
      </View>
      <ScrollView style={tw` mt-10  m-5`}>
        <View>
          <Text style={tw`text-white font-semibold text-lg`}>
            There are many variations of passages of Lorem Ipsum available
          </Text>
        </View>
        <View style={tw` mt-10 flex gap-5`}>
          <View style={tw`flex  w-full px-2 `}>
            <Text style={tw`text-white text-lg  font-semibold `}>Name</Text>
            <TextInput
              style={tw`  text-gray-400 text-lg border border-gray-600 rounded-lg`}
            />
          </View>
          <View style={tw`flex  w-full px-2 `}>
            <Text style={tw`text-white text-lg  font-semibold `}>
              Mobile number
            </Text>
            <TextInput
              style={tw`  text-gray-400 text-lg border border-gray-600 rounded-lg`}
              maxLength={10}
              keyboardType="phone-pad"
            />
          </View>
          <View style={tw`flex  w-full px-2 `}>
            <Text style={tw`text-white text-lg  font-semibold `}>
              Email Id{" "}
            </Text>
            <TextInput
              style={tw`  text-gray-400 text-lg border border-gray-600 rounded-lg`}
              maxLength={10}
              keyboardType="email-address"
            />
          </View>
          <View style={tw`flex  w-full px-2 `}>
            <Text style={tw`text-white text-lg  font-semibold `}>
              Email Id{" "}
            </Text>
            <TextInput
              style={tw`  text-gray-400 text-lg border border-gray-600 rounded-lg h-32 `}
              multiline
              placeholder="Type something here.."
            />
          </View>
          <TouchableOpacity style={tw`bg-[#04d8a0] rounded-lg`}>
            <Text style={tw`text-center p-2 text-white text-lg font-semibold`}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ContactUsScreen;
