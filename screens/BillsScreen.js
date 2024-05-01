import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import axios from "axios";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

const BillsScreen = ({ navigation }) => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    getAllBills();
  }, []);

  const getAllBills = () => {
    const options = {
      method: "GET",
      url: "https://billbox.catax.me/image/get-all-images",
      params: { user_id: "66222aa6020a92d53d8566bd" },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setBills(response?.data?.images);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const deleteBill = (id) => {
    const options = {
      method: "DELETE",
      url: "https://billbox.catax.me/image/delete-image",
      params: { image_id: id },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        getAllBills();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const createAlert = (id) =>
    Alert.alert("Delete  Bill", "Are you want ton delete this bill", [
      { text: "Yes", onPress: () => deleteBill(id) },
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ]);

  if (bills.length == 0) {
    return (
      <Text style={tw`text-white bg-black h-full p-5 text-center`}>
        Loading...
      </Text>
    );
  }

  console.log(bills, "bills");

  return (
    <ScrollView style={tw`bg-[#121212] h-full`}>
      <View
        style={tw`flex flex-row w-full items-center justify-between px-5 mt-5`}
      >
        <View style={tw`flex flex-row gap-5`}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color="white" />
          </TouchableOpacity>
          <Text style={tw`text-white text-xl`}>Bills</Text>
        </View>
        <View style={tw`flex flex-row items-center gap-5`}>
          <TextInput
            style={tw`   text-white  w-40 border border-[#9DE9D7] h-10 px-4  rounded-full`}
            placeholder="Search bills"
            placeholderTextColor="#999999"
            maxLength={10}
          />
          <TouchableOpacity>
            <AntDesign name="filter" size={25} color="#9DE9D7" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw` mt-10 `}>
        {bills?.reverse().map((bill) => {
          return (
            <View
              style={tw` py-4 px-5 flex flex-row justify-between border-b border-b-gray-800  `}
              key={bill.id}
            >
              <View style={tw`flex flex-row gap-2 w-4/6`}>
                <View>
                  <Image
                    source={{ uri: bill?.url }}
                    style={tw`h-12 w-12  rounded-full`}
                  />
                </View>
                <View style={tw`flex gap-2`}>
                  <View
                    style={tw`flex flex-row gap-2 items-center justify-center`}
                  >
                    <Text style={tw`text-white text-lg font-semibold`}>
                      Panasonic-electronic
                    </Text>
                    <Ionicons name="share-social" size={20} color="#9DE9D7" />
                  </View>
                  <View>
                    <Text style={tw`text-[11px] text-white`}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Text>
                  </View>
                  <View style={tw`flex flex-row gap-2`}>
                    <Text style={tw`text-[11px] text-white`}>01-02-2024 </Text>
                    <Text style={tw`text-[11px] text-white`}>10:40 PM </Text>
                    <Text
                      style={tw`text-white bg-[#0C241E] self-start text-xs   px-4 rounded-full`}
                    >
                      UPI
                    </Text>
                  </View>
                </View>
              </View>
              <View style={tw`flex items-center justify-center`}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("SingleBillScreen", {
                      imageUrl: bill?.url,
                    })
                  }
                >
                  <Text
                    style={tw`text-white bg-[#0C241E] self-start text-xs py-1  px-4 rounded-full`}
                  >
                    View
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default BillsScreen;
