import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {CommonActions} from '@react-navigation/native';

import {colors} from '../helper/utils';
import {hp, wp} from '../helper/constants';
import {icons} from '../helper/iconConstants';
import auth from '@react-native-firebase/auth';

const Loading = ({navigation}) => {
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Home'}],
          }),
        );
      } else {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'signIN'}],
          }),
        );
      }
    });
  }, []);

  return (
    <View style={style.mainContainer}>
      <Image source={icons.logo} resizeMode={'contain'} style={style.logo} />
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  logo: {
    width: wp(50),
    height: hp(12.5),
  },
});

export default Loading;
