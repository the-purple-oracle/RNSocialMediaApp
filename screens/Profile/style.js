import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
  scaleFontSize,
} from '../../assets/styles/scaling';
const styles = StyleSheet.create({
  profileImageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(20),
  },
  profileImageContent: {
    borderWidth: 1,
    padding: horizontalScale(4),
    borderRadius: horizontalScale(120),
    borderColor: '#0150EC',
  },
  profileImage: {
    width: horizontalScale(120),
    height: horizontalScale(120),
  },
  userName: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: scaleFontSize(20),
    color: '#022150',
  },
  userNameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(20),
  },
  profileStatsContainer: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(16),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  singleStatContainer: {
    alignItems: 'center',
    paddingHorizontal: horizontalScale(18),
    paddingVertical: verticalScale(10),
  },
  singleStatBorder: {
    borderRightWidth: 1,
    borderRightColor: '#E9EFF1',
  },
  singleStatNumber: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: scaleFontSize(20),
    lineHeight: scaleFontSize(24),
    color: '#022150',
  },
  singleStatText: {
    marginTop: verticalScale(6),
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    color: '#79869F',
  },
  border: {
    borderTopWidth: 1,
    borderColor: '#EFF2F6',
    marginVertical: verticalScale(16),
    marginHorizontal: horizontalScale(28),
  },
});

export default styles;
