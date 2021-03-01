import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const Splash = ({navigation}) => {
  //navigation merupakan props yang di tambahkan di app.js
  //dapat dari <NavigationContainer></NavigationContainer> sehingga semua root didalamnya
  // mempunyai root navigation
  // untuk perpindahan page dalam 2 detik menggunakan useeffect dan setTimeout
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeAuth');
    }, 2000);
  });

  return (
    <View>
      <Text>page splash screen</Text>
    </View>
  );
};

export default Splash;
