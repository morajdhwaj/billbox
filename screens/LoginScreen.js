import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AAButton from '../components/common/AAButton';
import tw from 'twrnc';

import axios from 'axios';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

const LoginScreen = ({navigation, route}) => {
  const staffMobile = route?.params?.staffMobile;
  const [credential, setCredential] = useState(staffMobile);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!credential || !password) {
      Toast.show({
        type: 'error',
        text1: 'Sign in error',
        text2: 'Please fill all required field',
      });

      return;
    }
    setLoading(true);
    const options = {
      method: 'POST',
      url: 'https://billbox.catax.me/hotel-staff/login',
      headers: {'Content-Type': 'application/json'},
      data: {credential: credential, password: password},
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data, 'success');
        navigation.navigate('HomeScreen');
        Toast.show({
          type: 'success',
          text1: 'Successfully logged',
          text2: response?.data?.message,
        });
        setLoading(false);
        setCredential('');
        setPassword('');
      })
      .catch(function (error) {
        console.error(error.response.data.detail);
        setCredential('');
        setPassword('');
        setLoading(false);
        Toast.show({
          type: 'error',
          text1: 'Login error',
          text2: error?.response?.data?.detail,
        });
      });
  };

  return (
    <View style={tw`bg-white h-full`}>
      <View style={tw`mx-5 flex `}>
        <View style={tw`h-1/4 flex justify-center items-center `}>
          <Image
            source={require('../assets/images/logo-1.jpeg')}
            ImageBackground
            style={tw`h-60 w-60`}
          />
        </View>
        <View style={tw``}>
          <Text style={tw`text-black mx-5 mt-5`}>Mobile Number</Text>
          <TextInput
            style={tw`border bg-slate-200 rounded-full px-5  text-gray-800 mt-2 text-[4]  `}
            onChangeText={setCredential}
            value={credential}
            maxLength={10}
            keyboardType={'phone-pad'}
          />

          <Text style={tw`text-black mx-5 mt-5`}>Password</Text>

          <TextInput
            style={tw`border bg-slate-200 mt-2 rounded-full px-5  text-gray-800 text-[4] `}
            onChangeText={setPassword}
            value={password}
            maxLength={10}
            secureTextEntry
          />
          <AAButton
            onPress={handleSubmit}
            title={loading ? 'Loading...' : 'Login'}
            style="border mx-10 h-12 rounded-full bg-black items-center justify-center  my-10"
          />
        </View>
        <View style={tw` flex items-center mt-10 `}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RegisterScreen');
            }}>
            <Text style={tw` text-cyan-500`}>Register?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={tw`mt-5 text-red-500`}
              onPress={() => {
                navigation.navigate('ForgotPasswordScreen');
              }}>
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
