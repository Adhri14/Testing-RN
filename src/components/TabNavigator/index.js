import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {
  IcCartOff,
  IcCartOn,
  IcHomeOff,
  IcHomeOn,
  IcLoveOff,
  IcLoveOn,
  IcUserOff,
  IcUserOn,
} from '../../assets';

const Icon = ({label, isFocused}) => {
  switch (label) {
    case 'Home':
      return isFocused ? <IcHomeOn /> : <IcHomeOff />;
    case 'Cart':
      return isFocused ? <IcCartOn /> : <IcCartOff />;
    case 'Love':
      return isFocused ? <IcLoveOn /> : <IcLoveOff />;
    case 'Profile':
      return isFocused ? <IcUserOn /> : <IcUserOff />;

    default:
      return <IcHomeOn />;
  }
};

const TabNavigator = ({onPress, onLongPress, isFocused, label, icon}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tab}>
      {icon && <Icon label={label} isFocused={isFocused} />}
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabNavigator;
