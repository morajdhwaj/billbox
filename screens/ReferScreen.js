import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  Share,
  Animated,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ReferScreen = ({ navigation }) => {
  const [alertClick, setAlertClick] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const whatsAppMessage = () => {
    // Replace 'message' with the message you want to send
    const message = "App play store link";

    // Constructing the WhatsApp URL with the pre-copied message
    const whatsappUrl = `whatsapp://send?text=${message}`;

    // Open the WhatsApp URL
    Linking.openURL(whatsappUrl)
      .then((data) => {
        console.log("WhatsApp Opened");
      })
      .catch(() => {
        alert("Make sure WhatsApp is installed on your device.");
      });
  };

  const telegramMessage = () => {
    // Replace 'username' with the username or phone number of the recipient
    const username = "username";
    // Replace 'message' with the message you want to send
    const message = "Your message here";

    // Constructing the Telegram URL with the pre-copied message
    const telegramUrl = `https://t.me/${username}?text=${encodeURIComponent(
      message
    )}`;

    // Open the Telegram URL
    Linking.openURL(telegramUrl)
      .then((data) => {
        console.log("Telegram Opened");
      })
      .catch(() => {
        alert("Make sure Telegram is installed on your device.");
      });
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: "App link",
        message:
          "Please install this app and stay safe , AppLink :https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en",
        url: "https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (alertClick) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [alertClick]);

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  const opacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <View style={tw`bg-black h-full`}>
      <View
        style={tw`flex flex-row w-full items-center justify-between px-5 mt-5`}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAlertClick(true)}>
          <AntDesign name="questioncircle" size={20} color="#9DE9D7" />
        </TouchableOpacity>
      </View>
      <View style={tw` flex items-center mt-5`}>
        <Image
          source={require("../assets/images/refer-image.png")}
          ImageBackground
          style={tw`h-[65] w-[65]`}
        />
      </View>
      <View style={tw` `}>
        <View>
          <Text
            style={tw`text-white text-5xl mx-5 font-semibold w-3/5 leading-[60px]`}
          >
            Refer your friend to Billbox
          </Text>
        </View>
        {alertClick ? (
          <Animated.View
            style={[
              tw`flex mx-5 mt-5 gap-2`,
              { opacity, transform: [{ translateY }] },
            ]}
          >
            <Text style={tw`text-white text-xl font-semibold`}>
              How It Works?
            </Text>
            <Text style={tw`text-white`}>
              Billbox referral program is for select user who have already
              invested through Billbox
            </Text>
            <Text style={tw`text-white`}>
              Share your Billbox referral link with your friend.
            </Text>
            <Text style={tw`text-white`}>
              By participating , you accept our
            </Text>
            <TouchableOpacity
              style={tw`flex flex-row items-center  mt-5 bg-[#02B386] rounded-lg gap-2 justify-center p-4`}
              onPress={() => setAlertClick(false)}
            >
              <Text style={tw` text-center  text-white`}>OKAY</Text>
            </TouchableOpacity>
          </Animated.View>
        ) : (
          <View style={tw`flex `}>
            <Text style={tw`text-white m-5`}>
              Invite your friend to Billbox, and share the joy of investing with
              them
            </Text>
            <TouchableOpacity
              style={tw`flex flex-row items-center  justify-center gap-2`}
              onPress={onShare}
            >
              <Ionicons name="share-social" size={25} color="#9DE9D7" />

              <Text style={tw`text-[#9DE9D7]  `}>Share invite link</Text>
            </TouchableOpacity>
            <View style={tw`w-full p-5  flex  gap-4`}>
              <TouchableOpacity
                style={tw`flex flex-row items-center  bg-[#33A9E1] w-full rounded-lg justify-center p-2`}
                onPress={telegramMessage}
              >
                <EvilIcons name="sc-telegram" size={28} color="white" />

                <Text style={tw` text-center  text-white`}>
                  INVITE VIA TELEGRAM
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`flex flex-row items-center  bg-[#02B386] rounded-lg gap-2 justify-center p-2`}
                onPress={whatsAppMessage}
              >
                <FontAwesome name="whatsapp" size={23} color="white" />

                <Text style={tw` text-center  text-white`}>
                  INVITE VIA WHATSAPP
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default ReferScreen;
