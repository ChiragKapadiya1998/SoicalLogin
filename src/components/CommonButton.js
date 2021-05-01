import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {hp, wp} from '../helper/constants';
import {colors} from '../helper/utils';

const CommonButton = ({
  title,
  mainContainerStyle,
  titleTextStyle,
  onPress,
  icon,
  loading,
}) => (
  <TouchableOpacity
    style={[style.mainContainer, mainContainerStyle]}
    activeOpacity={0.8}
    onPress={onPress}>
    {icon && <Image source={icon} style={style.icon} resizeMode={'contain'} />}
    {!loading ? (
      <Text style={[style.titleText, titleTextStyle]}>{title}</Text>
    ) : (
      <ActivityIndicator size="large" color="#fff" />
    )}
  </TouchableOpacity>
);

const style = StyleSheet.create({
  mainContainer: {
    width: wp(90),
    height: hp(7.5),
    borderRadius: hp(3.75),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondaryYellow,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darkBgGray1,
  },
  icon: {
    height: wp(4.5),
    width: wp(4.5),
    marginRight: wp(2.5),
    marginTop: -hp(0.35),
  },
});

export default CommonButton;
