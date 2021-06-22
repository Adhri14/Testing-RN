import {StyleSheet} from 'react-native';
import {Colors} from '../../utils';

export const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: isFocused => ({
    color: isFocused ? Colors.IconPrimary : Colors.IconSecondary,
    marginTop: 5,
  }),
});
