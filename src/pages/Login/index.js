import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Login = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 50,
        }}>
        Silahkan Anda Login
      </Text>

      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Pasword" />
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.textButton}>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  input: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 14,
    color: Colors.default,
    marginBottom: 15,
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: 'purple',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
};

export default Login;
