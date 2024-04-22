import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import tw from "twrnc";
import axios from "axios";
import Toast from "react-native-toast-message";

const UploadImage = ({ scannedImage }) => {
  const uploadFile = async () => {
    console.log("Helloss");
    try {
      const formData = new FormData();
      formData.append("file", {
        uri: scannedImage,
        name: "image.jpg",
        type: "image/jpeg",
      });
      formData.append("user_id", "66222aa6020a92d53d8566bd");
      formData.append("file_name", "image");

      const options = {
        method: "POST",
        url: "https://billbox-backend.onrender.com/image/upload-image",
        params: { user_id: "66222aa6020a92d53d8566bd", file_name: "image" },
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data, "success");
          Toast.show({
            type: "success",
            text1: response?.data?.message,
            visibilityTime: 2000,
          });
        })
        .catch(function (error) {
          console.error(error, "error");
        });
    } catch (error) {
      console.error(error);
    }
  };

  console.log();

  return (
    <View>
      {scannedImage && (
        <View style={tw` h-60% mt-10`}>
          <Image source={{ uri: scannedImage }} style={tw` h-50%`} />
          <View style={tw``}>
            <TextInput
              style={tw`border-b-2 border-b-gray-400 text-2xl  text-white  font-bold  px-5`}
              placeholder="Image Name"
            />
          </View>
        </View>
      )}
      <View style={tw`m-5`}>
        <TouchableOpacity
          style={tw`bg-[#9DE9D7]  rounded-xl`}
          onPress={uploadFile}
        >
          <Text style={tw`text-black text-2xl self-center font-bold py-2 `}>
            Upload
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UploadImage;
