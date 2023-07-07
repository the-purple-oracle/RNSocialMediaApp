import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './style';
import postImage from '../../assets/images/default_post.png';
import userImage from '../../assets/images/default_profile.png';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';

const UserPost = props => {
  return (
    <View style={styles.userPostContainer}>
      <View style={styles.userInformationContainer}>
        <View style={styles.userInformation}>
          <UserProfileImage image={userImage} />
          <View style={styles.userPostInformation}>
            <Text style={styles.name}>
              {props.firstName} {props.lastName}
            </Text>
            {props.location && (
              <Text style={styles.location}>{props.location}</Text>
            )}
          </View>
        </View>
        <Pressable>
          <FontAwesomeIcon icon={faEllipsisH} color={'#79869F'} size={22} />
        </Pressable>
      </View>
      <View style={styles.post}>
        <Image source={postImage} resizeMode={'cover'} />
      </View>
      <View style={styles.userPostStats}>
        <Pressable style={styles.userPostStatBtn}>
          <FontAwesomeIcon icon={faHeart} style={styles.userPostStatIcon} />
          <Text style={styles.userPostStatText}>{props.likes}</Text>
        </Pressable>
        <Pressable style={styles.userPostStatBtn}>
          <FontAwesomeIcon icon={faComment} style={styles.userPostStatIcon} />
          <Text style={styles.userPostStatText}>{props.comments}</Text>
        </Pressable>
        <Pressable style={styles.userPostStatBtn}>
          <FontAwesomeIcon icon={faBookmark} style={styles.userPostStatIcon} />
          <Text style={styles.userPostStatText}>{props.bookmarks}</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default UserPost;
