import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
  scaleFontSize,
} from '../../assets/styles/scaling';
const styles = StyleSheet.create({
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: scaleFontSize(26),
    lineHeight: verticalScale(29),
  },
});

export default styles;
