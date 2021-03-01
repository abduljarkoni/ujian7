import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../../utils';

const Button = ({title, onPress}) => {
  //1. membuat props onPress atau nama apa saja bebas agar bisa berpindah page/navigation
  //dan tambahakan pada componen touchableopacity function onpress
  //dan tambahkan juga onpress pada component Actionbutton.js
  return (
    <TouchableOpacity style={styles.wrapper.component} onPress={onPress}>
      <Text style={styles.text.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  wrapper: {
    component: {
      backgroundColor: colors.default,
      borderRadius: 25,
      paddingVertical: 13,
    },
  },
  text: {
    title: {
      fontSize: 12,
      fontWeight: 'bold',
      color: 'white',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
  },
};

export default Button;
