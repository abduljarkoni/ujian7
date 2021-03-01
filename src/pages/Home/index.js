import React from 'react';
import {View, Text, Image} from 'react-native';
import {checkin, checkout, history, logout, calender} from '../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  const handleGoto = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.wrapper.page}>
      <View style={styles.wrapper.cardContainer}>
        <TouchableOpacity onPress={() => handleGoto('Checkin')}>
          <View style={styles.wrapper.card}>
            <Image source={checkin} style={{width: 100, height: 100}} />
            <Text style={styles.text.title}>CHECK IN</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleGoto('Checkout')}>
          <View style={styles.wrapper.card}>
            <Image source={checkout} style={{width: 100, height: 100}} />
            <Text style={styles.text.title}>CHECK OUT</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper.cardContainer}>
        <TouchableOpacity onPress={() => handleGoto('Ijin')}>
          <View style={styles.wrapper.card}>
            <Image source={calender} style={{width: 100, height: 100}} />
            <Text style={styles.text.title}>IJIN</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleGoto('History')}>
          <View style={styles.wrapper.card}>
            <Image source={history} style={{width: 100, height: 100}} />
            <Text style={styles.text.title}>HISTORY ABSEN</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => handleGoto('WelcomeAuth')}>
        <View style={styles.wrapper.card}>
          <Image source={logout} style={{width: 100, height: 100}} />
          <Text style={styles.text.title}>LOGOUT</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  wrapper: {
    page: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      paddingHorizontal: '10%',
    },
    cardContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 10,
    },
    card: {
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 20,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 10,
    },
  },
  text: {
    title: {
      marginBottom: 2,
      marginTop: 1,
      fontWeight: 'bold',
    },
  },
};

export default Home;
