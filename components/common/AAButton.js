import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

const AAButton = memo(({title, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={tw`${style} shadow-lg `}>
      <Text style={tw`text-white text-center`}>{title} </Text>
    </TouchableOpacity>
  );
});

export default AAButton;
