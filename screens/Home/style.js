import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
  scaleFontSize,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  userStoryContainer: {
    paddingHorizontal: horizontalScale(25.5),
    marginTop: verticalScale(12),
  },
  userPostContainer: {
    marginTop: verticalScale(30),

    paddingHorizontal: horizontalScale(23),
  },
});
export default styles;
