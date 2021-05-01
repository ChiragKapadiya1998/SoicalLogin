import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {hp, wp} from '../helper/constants';
import {icons} from '../helper/iconConstants';
import {colors} from '../helper/utils';

const Input = ({
  value,
  placeholder,
  label,
  onChangeText,
  secureTextEntry,
  icon,
  keyboardType,
  onChangeIcon,
}) => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: colors.secondaryYellow,
        marginTop: hp(1),
        paddingTop: hp(2.3),
        marginHorizontal: wp(2),
        marginTop: hp(4),
      }}>
      {label && (
        <Text style={{position: 'absolute', fontSize: 16}}>{label}</Text>
      )}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TextInput
          placeholder={placeholder}
          autoCapitalize={'none'}
          placeholderTextColor={'#000'}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          style={{flex: 1, marginRight: wp(4), fontSize: 18}}
          keyboardType={keyboardType}
        />
        {icon && (
          <TouchableOpacity onPress={onChangeIcon}>
            <Image source={icon} style={{width: wp(7), height: wp(7)}} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
