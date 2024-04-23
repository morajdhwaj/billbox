import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import axios from "axios";

const BillsScreen = () => {
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
    return <Text style={tw`text-black`}>Loading...</Text>;
  }

  console.log(bills, "bills");

  return (
    <ScrollView style={tw`bg-[#121212] h-full`}>
      <View style={tw`  mx-5`}>
        {bills?.reverse().map((bill) => {
          return (
            <View style={tw`  mt-10 mx-5`} key={bill.id}>
              <Text style={tw`text-black`}>{bill.id}</Text>

              <Image
                source={{ uri: bill?.url }}
                style={{ width: 300, height: 200, borderRadius: 10 }}
              />
              <TouchableOpacity
                onPress={() => createAlert(bill?.id)}
                style={tw`my-5 bg-[#9DE9D7]   self-start p-2 rounded`}
              >
                <Text style={tw`text-black`}>Delete</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default BillsScreen;
