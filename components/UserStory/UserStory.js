import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import defaultImg from '../../assets/images/default_profile.png';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const UserStory = props => {
  return (
    <View style={styles.storyContainer}>
      <UserProfileImage image={defaultImg} />
      <Text style={styles.name}>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default UserStory;
