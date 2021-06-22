import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PrimaryColor,
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    padding: 30,
    alignItems: 'center',
  },
  img: {
    resizeMode: 'cover',
    borderRadius: 50,
  },
  thumb: {
    width: 60,
    height: 60,
    overflow: 'hidden',
    borderRadius: 50,
    marginRight: 18,
  },
  name: {
    fontFamily: Fonts.Medium,
    fontSize: 20,
    color: Colors.Other,
  },
  desc: {
    fontFamily: Fonts.Regular,
    fontSize: 14,
    color: Colors.SecondaryColor,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.Background,
    marginHorizontal: 30,
    paddingVertical: 10,
    paddingHorizontal: 18,
    justifyContent: 'space-between',
    borderRadius: 15,
    marginTop: -10,
    marginBottom: 25,
  },
  textInput: {
    flex: 1,
    fontFamily: Fonts.Medium,
    fontSize: 14,
    color: Colors.SecondaryColor,
  },
  search: {
    marginLeft: 7,
  },
});
