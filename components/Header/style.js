import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
  scaleFontSize,
} from '../../assets/styles/scaling';
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: verticalScale(30),
    paddingRight: horizontalScale(26),
    paddingLeft: horizontalScale(26),
  },
  messageIcon: {
    backgroundColor: '#F9FAFB',
    padding: horizontalScale(12),
    borderRadius: horizontalScale(100),
  },
  msgNumberContainer: {
    width: horizontalScale(16),
    height: horizontalScale(16),
    backgroundColor: '#F35BAC',
    borderRadius: horizontalScale(10),
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: horizontalScale(6),
    top: verticalScale(8),
  },
  msgNumber: {
    fontSize: scaleFontSize(13),
    fontFamily: 'Inter',
    fontWeight: '600',
    color: 'white',
  },
});

export default styles;
