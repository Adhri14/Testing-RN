import {Dimensions, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../utils';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.PrimaryColor,
  },
  body: {
    flex: 1,
  },
  img: {
    width,
    height: height * 0.7,
    position: 'relative',
    marginTop: -15,
  },
  hero: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  like: {
    position: 'absolute',
    top: 165,
    right: 24,
  },
  bg: {
    width,
    height: height * 0.4,
    backgroundColor: '#4A3EAE',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 150,
  },
  footer: {
    height: height * 0.33,
    backgroundColor: Colors.Other,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 50,
    paddingBottom: 40,
    paddingHorizontal: 68,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.Semibold,
    fontSize: 24,
    color: Colors.TintPrimary,
    marginBottom: 12,
  },
  subtitle: {
    fontFamily: Fonts.Regular,
    fontSize: 16,
    color: Colors.TintSecondary,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: Colors.IconPrimary,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 30,
    marginTop: 50,
  },
  textBtn: {
    fontFamily: Fonts.Semibold,
    fontSize: 24,
    color: Colors.Other,
  },
});
