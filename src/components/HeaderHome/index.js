import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {IcSearch, ProfileDummy} from '../../assets';
import {Colors} from '../../utils';
import {styles} from './styles';

const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.thumb}>
          <Image source={ProfileDummy} style={styles.img} />
        </View>
        <View style={styles.text}>
          <Text style={styles.name}>Hello, Adhri</Text>
          <Text style={styles.desc}>What Pie you want to try today?</Text>
        </View>
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="Find your favorite Pie"
          placeholderTextColor={Colors.SecondaryColor}
          style={styles.textInput}
        />
        <IcSearch style={styles.search} />
      </View>
    </View>
  );
};

export default HeaderHome;
