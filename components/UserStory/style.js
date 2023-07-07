import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
  scaleFontSize,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  storyContainer: {
    marginRight: horizontalScale(17),
  },
  name: {
    textAlign: 'center',
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: scaleFontSize(14),
    lineHeight: verticalScale(17),
    marginTop: verticalScale(8),
  },
});

export default styles;
