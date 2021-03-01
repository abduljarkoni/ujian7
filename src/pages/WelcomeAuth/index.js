import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import ActionButton from './ActionButton';
import {colors} from '../../utils';
import {welcome} from '../../assets';

const WelcomeAuth = ({navigation}) => {
  // 1. membuat fungsi perpindahan page/naivgasi
  //navigation.navigate adalah fungsi navigasi yang bisa untuk kembali pagenya
  //dari login mwu kembali ke page wleocme dan bgtu jga sebaliknya
  const handleGoto = (screen) => {
    navigation.navigate(screen);
  };

  // dalam pembungkus view nya di tambahakn flex 1 supaya dapat memnuhi seluruh halaman
  // di pagenya
  return (
    <View style={styles.wrapper.page}>
      <Image source={welcome} style={styles.wrapper.ilustrasi} />
      <Text style={styles.text.welcome}>Selamat Datang Di App Gojek</Text>

      <ActionButton
        desc="Silahkan masuk, jika anda sudah memiliki akun"
        title="Masuk"
        onPress={() => handleGoto('Login')}
      />
      <ActionButton
        desc="Silahkan Daftar, jika anda belum memiliki akun"
        title="Daftar"
        onPress={() => handleGoto('Register')}
      />
    </View>
  );
};

//styling componen
const styles = {
  wrapper: {
    page: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      flex: 1,
    },
    ilustrasi: {
      width: 219,
      height: 117,
      marginBottom: 10,
    },
  },
  text: {
    welcome: {
      fontSize: 18,
      color: colors.default,
      fontWeight: 'bold',
      marginBottom: 40,
    },
  },
};

export default WelcomeAuth;
