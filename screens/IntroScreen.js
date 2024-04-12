import React, { useEffect } from "react";
import { Image, PermissionsAndroid, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import tw from "twrnc";

const IntroScreen = ({ navigation }) => {
  const slides = [
    {
      key: "1",
      title: "Intro Stock Photos",
      text: "Escape the Ordinary: Feed Your Adventurous Spirit and Discover a World of New Flavors!",
      image: require("../assets/images/intro-1.jpeg"),
      backgroundColor: "red",
    },
    {
      key: "2",
      title: "Intro Background Images",
      text: "Say goodbye to late deliveries and start your craving journey with us! Get your food delivered in minutes.",
      image: require("../assets/images/intro-2.jpeg"),
      backgroundColor: "blue",
    },
    {
      key: "3",
      title: "22 Hard-Hitting Intro Backgrounds",
      text: "Tantalize Your Taste Buds with affordable food. Savor international flavors and live the good food.",
      image: require("../assets/images/intro-3.jpeg"),
      backgroundColor: "green",
    },
    {
      key: "4",
      title: "Slash Logo Reveal Intro In Kinemaster",
      text: "Tantalize Your Taste Buds with affordable food. Savor international flavors and live the good food.",
      image: require("../assets/images/intro-4.jpeg"),
      backgroundColor: "green",
    },
  ];

  const requestNotificaionPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        {
          title: "notificaion Permission",
          message: "Can we get notificaion permission?",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      console.log("granted", granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can notify");
        return true;
      } else {
        console.log("You cannot use notify");
        return false;
      }
    } catch (err) {
      console.error(err);
      alert(err);
      return false;
    }
  };

  useEffect(() => {
    requestNotificaionPermission();
  }, []);

  const renderSlide = ({ item }) => {
    return (
      <View style={tw``}>
        <View style={tw` h-4/6 w-full`} source={item.image}>
          <Image style={tw` h-1/1 w-full`} source={item.image} />
        </View>
        <View style={tw`h-2/6 bg-black `}>
          <Text style={tw`text-center font-bold  text-xl pt-5  text-white`}>
            {item.title}
          </Text>
          <Text style={tw`text-center mx-10 mt-3  text-white`}>
            {item.text}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderSlide}
      onDone={() => navigation.navigate("LoginScreen")}
      activeDotStyle={{ backgroundColor: "white" }}
      dotStyle={{ backgroundColor: "gray" }}
    />
  );
};

export default IntroScreen;
