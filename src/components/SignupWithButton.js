import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {hp, wp} from '../helper/constants';

const SignupWithButton = ({icon, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: wp(18),
        height: hp(8),
        borderRadius: hp(3.75),
        marginHorizontal: wp(1.35),
      }}>
      <Image source={icon} style={{width: wp(10), height: wp(10)}} />
    </TouchableOpacity>
  );
};

export default SignupWithButton;

const styles = StyleSheet.create({});
