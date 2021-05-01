import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';

import CommonButton from '../components/CommonButton';
import Input from '../components/Input';
import {hp, wp} from '../helper/constants';
import {icons} from '../helper/iconConstants';
import {colors} from '../helper/utils';
import auth from '@react-native-firebase/auth';

const Registration = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [visibility, setvisibility] = useState(true);
  const [loading, setLoading] = useState(false);

  const onCreateAccount = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === '') {
      alert('Enter the email');
    } else if (reg.test(email) !== true) {
      alert('Enter the valid Email');
    } else if (password === '') {
      alert('Enter the valid password');
    } else {
      setLoading(true);
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'Home'}],
            }),
          );
          setLoading(false);
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            setLoading(false);
            setError('That email address is already in use!');
          }
          if (error.code === 'auth/invalid-email') {
            setLoading(false);
            setError('That email address is invalid!');
          }
          setLoading(false);
        });
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.primary}}>
      <KeyboardAvoidingView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{flex: 1, paddingHorizontal: wp(5), justifyContent: 'center'}}>
        <View style={{alignItems: 'center', marginBottom: hp(3)}}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>Registration</Text>
        </View>
        <Input
          value={email}
          placeholder={'abc@gmail.com'}
          label={'Email'}
          onChangeText={text => setEmail(text)}
        />
        <Input
          value={password}
          placeholder={'Password'}
          label={'Password'}
          onChangeText={text => setPassword(text)}
          secureTextEntry={visibility}
          icon={visibility ? icons.visibility : icons.invisibility}
          onChangeIcon={() => setvisibility(!visibility)}
        />
        {error ? (
          <Text style={{color: 'red', marginLeft: wp(2.5), marginTop: hp(1.5)}}>
            {error}
          </Text>
        ) : null}
      </KeyboardAvoidingView>
      <CommonButton
        title={'Create Account'}
        loading={loading}
        onPress={() => onCreateAccount()}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: hp(1),
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{fontSize: 16}}>{'Already have an account??'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Registration;

const styles = StyleSheet.create({});
