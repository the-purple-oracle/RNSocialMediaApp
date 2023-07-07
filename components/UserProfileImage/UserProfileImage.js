import React from 'react';
import {View, Image} from 'react-native';
import styles from './style';

const UserProfileImage = props => {
  return (
    <View style={styles.imageContainer}>
      <Image source={props.image} />
    </View>
  );
};

export default UserProfileImage;
