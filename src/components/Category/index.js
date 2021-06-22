import React from 'react';
import {Text, View} from 'react-native';
import {IcCakeOff, IcPieOff, IcSaltyOff, IcWaterOff} from '../../assets';
import {styles} from './styles';

const IconCategory = ({type}) => {
  switch (type) {
    case 'salty':
      return <IcSaltyOff />;
    case 'sweet':
      return <IcPieOff />;
    case 'fruit':
      return <IcCakeOff />;
    case 'water':
      return <IcWaterOff />;

    default:
      return <IcSaltyOff />;
  }
};

const Category = ({label, type}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <IconCategory type={type} />
        {/* <IcSaltyOff /> */}
      </View>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

export default Category;
