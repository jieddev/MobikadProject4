import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../constants/colors'
import Spacer from '../components/spacer'

const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState('');

  const handleSendOTP = async () => {
    console.log("Send OTP to ", phone);
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      
      <Text style={styles.title}>Enter your Phone Number</Text>

      <Text style={styles.textFormat}>Please enter your active phone number below to create your account</Text>

      <Spacer height={20}></Spacer>

      <View style={styles.phoneContainer}>
        <Text style={styles.countryCode}>+63</Text>
        <TextInput
          style={styles.phoneInput}
          placeholder="9123456789"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
          maxLength={10}
        />
      </View>

      <Spacer height={50}></Spacer>

      <TouchableOpacity style={styles.sendOTPButton} onPress={handleSendOTP}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  textFormat: {
    color: colors.textColor,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 15,
  },
  countryCode: {
    fontSize: 18,
    marginRight: 8,
  },
  phoneInput: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
      backgroundColor: colors.white,
      width: '20%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      borderColor: colors.primary,
      borderWidth: 1,
      position: 'absolute',
      top: 40,  
      left: 20,
  },
  sendOTPButton: {
      backgroundColor: colors.primary,
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginBottom: 15,
  },
})