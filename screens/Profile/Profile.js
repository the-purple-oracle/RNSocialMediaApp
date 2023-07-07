import React from 'react';
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import globalStyles from '../../assets/styles/main';
import styles from './style';
import ProfileImg from '../../assets/images/default_profile.png';
import {ProfileTabNavigation} from '../../navigation/MainNavigation';
const Profile = () => {
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView>
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImageContent}>
            <Image style={styles.profileImage} source={ProfileImg} />
          </View>
        </View>
        <View style={styles.userNameContainer}>
          <Text style={styles.userName}>John Doe</Text>
        </View>
        <View style={styles.profileStatsContainer}>
          <View style={[styles.singleStatContainer, styles.singleStatBorder]}>
            <Text style={styles.singleStatNumber}>45</Text>
            <Text style={styles.singleStatText}>Following</Text>
          </View>
          <View style={[styles.singleStatContainer, styles.singleStatBorder]}>
            <Text style={styles.singleStatNumber}>30M</Text>
            <Text style={styles.singleStatText}>Followers</Text>
          </View>
          <View style={styles.singleStatContainer}>
            <Text style={styles.singleStatNumber}>100</Text>
            <Text style={styles.singleStatText} t>
              Posts
            </Text>
          </View>
        </View>
        <View style={styles.border} />
        <View style={{height: '100%'}}>
          <ProfileTabNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
