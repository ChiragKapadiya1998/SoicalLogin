import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CommonButton from '../components/CommonButton';
import {colors} from '../helper/utils';
import {GoogleSignin} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
const HomeScreen = () => {
  const onLogout = async () => {
    // await GoogleSignin.revokeAccess();
    // await GoogleSignin.signOut();
    auth()
      .signOut()
      .then(item => alert('Sign Out Successfully'));
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.primary}}>
      <View style={{alignItems: 'center', flex: 1}}>
        <Text>Home</Text>
        <View></View>
      </View>
      <CommonButton
        title={'LogOut'}
        mainContainerStyle={{marginBottom: 10}}
        onPress={() => onLogout()}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
