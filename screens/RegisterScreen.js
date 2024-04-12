import {View, Text, TextInput, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import AAButton from '../components/common/AAButton';
import tw from 'twrnc';
import axios from 'axios';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {useSelector} from 'react-redux';

const RegisterScreen = ({navigation}) => {
  const [staffMobile, setStaffMobile] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const userId = useSelector(state => {
    return state.user;
  });

  console.log(userId);

  const handleRegister = () => {
    setLoading(true);
    if (!staffMobile || !name || !email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Sign in error',
        text2: 'Please fill all required field',
      });

      return;
    }

    const options = {
      method: 'POST',
      url: 'https://billbox.catax.me/hotel-staff/register',
      headers: {'Content-Type': 'application/json'},
      data: {
        staffEmail: email,
        staffPassword: password,
        staffMobile: staffMobile,
        staffFullName: name,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        Toast.show({
          type: 'success',
          text1: response.data.message,
        });
        navigation.navigate('RegisterOTPScreen', {...response.data});
        setLoading(false);
      })
      .catch(function (error) {
        if (
          error.response.data.detail ===
          'Staff with given Mobile Number already exists'
        ) {
          navigation.navigate('LoginScreen', {staffMobile});
          Toast.show({
            type: 'info',
            text1: 'Staff with given Mobile Number already exists',
          });
        } else {
          console.log(error?.response?.data);
          Toast.show({
            type: 'error',
            text1: 'Registration error',
            text2: error?.response?.data?.detail,
          });
        }
        setLoading(false);
      });
  };

  return (
    <ScrollView style={tw`bg-white h-full`}>
      <View style={tw`mx-5 flex `}>
        <View style={tw`h-1/4 flex justify-center items-center `}>
          <Image
            source={require('../assets/images/logo-1.jpeg')}
            ImageBackground
            style={tw`h-60 w-60`}
          />
        </View>
        <View style={tw`h-1/3`}>
          <Text style={tw`text-black mx-5 mt-5`}>Mobile Number</Text>
          <TextInput
            style={tw`border bg-slate-200 rounded-full px-5 mt-2  text-gray-800 text-[4]  `}
            onChangeText={setStaffMobile}
            value={staffMobile}
            maxLength={10}
            keyboardType={'number-pad'}
          />

          <Text style={tw`text-black mx-5 mt-5`}>Full Name</Text>

          <TextInput
            style={tw`border bg-slate-200 rounded-full px-5 mt-2 text-gray-800 text-[4] `}
            value={name}
            onChangeText={setName}
          />
          <Text style={tw`text-black mx-5 mt-5`}>Email</Text>
          <TextInput
            style={tw`border bg-slate-200 rounded-full px-5 mt-2 text-gray-800 text-[4]`}
            onChangeText={text => setEmail(text.toLowerCase())} // Convert text to lowercase before setting it as email
            value={email}
          />
          <Text style={tw`text-black mx-5 mt-5`}>Password</Text>
          <TextInput
            style={tw`border bg-slate-200 rounded-full px-5 mt-2 text-gray-800 text-[4]  `}
            onChangeText={setPassword}
            value={password}
            maxLength={10}
            secureTextEntry
          />
          <AAButton
            onPress={handleRegister}
            title={loading ? 'Loading...' : 'Register'}
            style="border mx-10 h-12 rounded-full bg-black items-center justify-center  my-10"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
