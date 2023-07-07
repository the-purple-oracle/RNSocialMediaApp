import React from 'react';
import {View, Pressable, Text} from 'react-native';
import Title from '../Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';
const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Title title={"Let's Explore"} />
      <Pressable style={styles.messageIcon}>
        <FontAwesomeIcon icon={faEnvelope} color={'#CACDDE'} size={25} />
        <View style={styles.msgNumberContainer}>
          <Text style={styles.msgNumber}>2</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default Header;
