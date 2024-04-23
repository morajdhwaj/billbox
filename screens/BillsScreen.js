import { View, Text, Image, ScrollView } from "react-native";
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

  if (bills.length == 0) {
    return <Text style={tw`text-black`}>Loading...</Text>;
  }

  console.log(bills, "bills");

  return (
    <ScrollView style={tw`text-black w-full`}>
      <View style={tw`  mt-10 mx-5`}>
        {bills.map((bill) => {
          return (
            <View style={tw`  mt-10 mx-5`} key={bill.id}>
              <Text style={tw`text-black`}>{bill.id}</Text>

              <Image
                source={{ uri: bill?.url }}
                style={{ width: 300, height: 200 }}
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default BillsScreen;
