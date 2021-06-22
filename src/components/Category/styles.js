import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Other,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  wrapper: {
    marginTop: 12,
  },
  text: {
    fontFamily: Fonts.Regular,
    fontSize: 12,
    color: Colors.TintSecondary,
    textAlign: 'center',
    marginTop: 12,
  },
});
