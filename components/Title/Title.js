import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
const Title = props => {
  return <Text style={styles.title}>{props.title}</Text>;
};
Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
