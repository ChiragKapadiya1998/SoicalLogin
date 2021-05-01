import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import SignupWithButton from '../components/SignupWithButton';
import {hp} from '../helper/constants';
import {icons} from '../helper/iconConstants';
import {colors} from '../helper/utils';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

const SignInSelect = ({navigation}) => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '786085117254-pfjrieufcaql4mi830koehrtcsdu3sje.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);
  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken} = await GoogleSignin.signIn();
      console.log(idToken);
      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      await auth()
        .signInWithCredential(credential)
        .then(user => {
          navigation.navigate('Loading');
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  const onFacebookButtonPress = async () => {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );
    await auth()
      .signInWithCredential(facebookCredential)
      .then(user => {
        navigation.navigate('Loading');
      });
  };
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: colors.primary, alignItems: 'center'}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 26, fontWeight: 'bold'}}>Sign In</Text>
      </View>
      <View style={{flexDirection: 'row', marginVertical: hp(5)}}>
        <SignupWithButton
          icon={icons.facebook}
          onPress={() => onFacebookButtonPress()}
        />
        <SignupWithButton icon={icons.google} onPress={() => _signIn()} />
        <SignupWithButton
          icon={icons.phone}
          onPress={() => navigation.navigate('PhoneAuth')}
        />
        <SignupWithButton
          icon={icons.gmail}
          onPress={() => navigation.navigate('Registration')}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{marginBottom: hp(5)}}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={{fontSize: 16}}>Already have an account?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignInSelect;

const styles = StyleSheet.create({});
