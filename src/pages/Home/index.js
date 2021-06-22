import React from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import {Category, HeaderHome} from '../../components';
import {Colors} from '../../utils';
import {styles} from './styles';

const Home = () => {
  return (
    <ScrollView style={styles.page}>
      <StatusBar backgroundColor={Colors.PrimaryColor} />
      <HeaderHome />
      <View style={styles.body}>
        <View style={styles.category}>
          <Text style={styles.textCategory}>Category</Text>
          <View style={styles.row}>
            <Category label="Salty Pie" type="water" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
