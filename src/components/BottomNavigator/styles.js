import {StyleSheet} from 'react-native';
import {Colors} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Other,
    flexDirection: 'row',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    // borderRadius: 50,
    paddingVertical: 21,
    paddingHorizontal: 30,
    position: 'absolute',
    bottom: 0,
  },
});
