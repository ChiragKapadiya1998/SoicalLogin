import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

import CommonButton from '../components/CommonButton';
import Input from '../components/Input';
import {hp, wp} from '../helper/constants';

import {colors} from '../helper/utils';
import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/native';

const PhoneAuth = ({navigation}) => {
  const [phone, setPhone] = useState('');

  // Handle the button press
  const signInWithPhoneNumber = async () => {
    if (phone === '') {
      alert('Enter the Phone No');
    } else {
      const confirmation = await auth().signInWithPhoneNumber(`+91${phone}`);
      console.log(confirmation);
      if (confirmation._auth._authResult) {
        navigation.navigate('Otp', {confirmation: confirmation});
      } else {
        alert('Internal Error');
      }
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.primary}}>
      <KeyboardAvoidingView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{flex: 1, paddingHorizontal: wp(5), justifyContent: 'center'}}>
        <View style={{alignItems: 'center', marginBottom: hp(3)}}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>Login</Text>
        </View>
        <Input
          value={phone}
          placeholder={'+91 Phone No'}
          label={'Mobile No'}
          onChangeText={text => setPhone(text)}
          keyboardType={'numeric'}
        />
      </KeyboardAvoidingView>
      <CommonButton
        title={'Send Otp'}
        mainContainerStyle={{marginBottom: hp(3)}}
        onPress={() => signInWithPhoneNumber()}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: hp(2),
        }}>
        <Text style={{fontSize: 16}}>{"Don't have an account?  "}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('signIN')}>
          <Text style={{fontSize: 18, color: '#fa1e0e'}}>{'Sign Up'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PhoneAuth;

const styles = StyleSheet.create({});
