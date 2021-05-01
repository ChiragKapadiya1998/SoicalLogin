import React, {useEffect, useState} from 'react';
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

const Otp = ({navigation, route}) => {
  const {confirmation} = route.params;
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');
  useEffect(() => {
    setConfirm(confirmation);
  }, []);

  const confirmCode = async () => {
    if (code === '') {
      alert('Enter the Otp');
    } else {
      try {
        await confirm.confirm(code);
      } catch (error) {
        alert('Invalid code.');
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
          value={code}
          placeholder={'Enter the OTP'}
          label={'OTP'}
          onChangeText={text => setCode(text)}
          keyboardType={'numeric'}
        />
      </KeyboardAvoidingView>
      <CommonButton
        title={'Login'}
        mainContainerStyle={{marginBottom: hp(3)}}
        onPress={() => confirmCode()}
      />
    </SafeAreaView>
  );
};

export default Otp;

const styles = StyleSheet.create({});
