import {Dimensions, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../utils';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.PrimaryColor,
  },
  body: {
    height: height * 0.7,
    backgroundColor: '#F6F5FF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
  textCategory: {
    fontFamily: Fonts.Semibold,
    fontSize: 20,
    color: Colors.TintPrimary,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
    // width: '100%',
  },
});
