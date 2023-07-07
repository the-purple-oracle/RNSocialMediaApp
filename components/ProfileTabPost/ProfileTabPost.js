import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './style';
import defaultPostImg from '../../assets/images/default_post.png';

const ProfileTabPost = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.profileTabPostContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={defaultPostImg}
        />
        <Image
          style={styles.image}
          resizeMode="contain"
          source={defaultPostImg}
        />
      </View>
      <View style={[styles.imageContainer, styles.imageUpcomingRowsContainer]}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={defaultPostImg}
        />
        <Image
          style={styles.image}
          resizeMode="contain"
          source={defaultPostImg}
        />
      </View>
      <View
        style={[
          styles.imageContainer,
          styles.imageUpcomingRowsContainer,
          styles.lastImageContainer,
        ]}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={defaultPostImg}
        />
        <Image
          style={styles.image}
          resizeMode="contain"
          source={defaultPostImg}
        />
      </View>
    </ScrollView>
  );
};
export default ProfileTabPost;
