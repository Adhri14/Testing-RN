import React from 'react';
import {useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SplashScreen} from '../SplashScreen';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'one',
    title: 'Hi, Welcome to Anterin.',
    text: 'Helps you to deliver the package to the\nowner',
    image: require('../../assets/illustration/sc1.png'),
  },
  {
    key: 'two',
    title: 'Order Anytime',
    text: 'You can order a courier to deliver your\npackage via mobile anytime',
    image: require('../../assets/illustration/sc2.png'),
  },
  {
    key: 'three',
    title: 'Deliver Anywhere',
    text: 'Our courier will deliver your package to\nanywhere you want',
    image: require('../../assets/illustration/sc3.png'),
  },
];

const OnBoarding = ({navigation}) => {
  // const [state, setState] = useState({
  //   showRealApp: false,
  // });

  const renderItem = ({item}) => {
    return (
      <View style={[styles.slide]}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const renderNextButton = () => {
    return <Text style={styles.textNavigasi}>Next</Text>;
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.textNavigasi}>Done</Text>
      </View>
    );
  };

  // const renderPagination = (activeIndex: number) => {
  //   return (
  //     <View style={styles.paginationContainer}>
  //       <SafeAreaView>
  //         <View style={styles.paginationDots}>
  //           {slides.length > 1 &&
  //             slides.map((_, i) => (
  //               <TouchableOpacity
  //                 key={i}
  //                 style={[
  //                   i === activeIndex ? styles.dotActive : styles.dot,
  //                   i === activeIndex
  //                     ? {backgroundColor: '#5537FB'}
  //                     : {backgroundColor: '#1C1C1C'},
  //                 ]}
  //                 onPress={() => this.slider?.goToSlide(i, true)}
  //               />
  //             ))}
  //         </View>
  //       </SafeAreaView>
  //     </View>
  //   );
  // };

  return (
    <>
      <AppIntroSlider
        // renderPagination={renderPagination}
        renderItem={renderItem}
        data={slides}
        onDone={() => navigation.replace('MainApp')}
      />
    </>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5537FB',
  },
  image: {
    width: 387,
    height: 437,
    marginTop: -200,
  },
  title: {
    color: '#5537FB',
    fontSize: 25,
    marginTop: 11,
    fontWeight: 'bold',
  },
  text: {
    color: '#1C1C1C',
    fontSize: 16,
    marginTop: 20,
    fontWeight: '300',
    textAlign: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 150,
    left: 16,
    right: 16,
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotActive: {
    width: 20,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  buttonCircle: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
  },
  textNavigasi: {
    color: '#1c1c1c',
    position: 'absolute',
    bottom: 10,
    zIndex: 999,
  },
});
