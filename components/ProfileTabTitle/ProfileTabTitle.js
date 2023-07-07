import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const ProfileTabTitle = props => {
  return (
    <View>
      <Text
        style={[
          styles.title,
          {
            color: props.isFocused ? '#022150' : '#79869F',
            fontWeight: props.isFocused ? '500' : '400',
          },
        ]}>
        {props.title}
      </Text>
    </View>
  );
};
export default ProfileTabTitle;
