import React from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Chef, Like} from '../../assets';
import {styles} from './styles';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="#554AB2" barStyle="light-content" />
      <View style={styles.body}>
        <View style={styles.img}>
          <View style={styles.bg} />
          <Animatable.Image
            source={Like}
            animation="pulse"
            // animation="zoomIn"
            duration={350}
            iterationCount="infinite"
            style={styles.like}
          />
          <Animatable.Image
            // onAnimationBegin="bounceIn"
            // onAnimationEnd="pulse"
            animation="zoomIn"
            duration={350}
            source={Chef}
            style={styles.hero}
          />
        </View>
      </View>
      <Animatable.View
        style={styles.footer}
        animation="fadeInUpBig"
        duration={500}>
        <Text style={styles.title}>PieLove Antto</Text>
        <Text style={styles.subtitle}>
          Let's taste the Pie Cake made by Chef Bimo Semesta
        </Text>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.9}
          onPress={() => navigation.replace('MainApp')}>
          <Text style={styles.textBtn}>Let's Order</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;
