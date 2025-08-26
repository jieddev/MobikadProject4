import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../config/colors'
import Spacer from '../components/spacer'



export default function CreateAccountScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreateAccount = () => {
    console.log({name, email, phone, password, confirmPassword});
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Spacer height={50} />

      <Text style={styles.title}>Create Account</Text>
      
      <Text style={styles.textFormat}>Please fill in the information below to create your account</Text>

      <Spacer height={30} />

      <Text style={styles.textFormat}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        placeholderTextColor={colors.textColor}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.textFormat}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Email"
        placeholderTextColor={colors.textColor}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.textFormat}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        placeholderTextColor={colors.textColor}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      
      <Text style={styles.textFormat}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Password"
        placeholderTextColor="black"
        color={colors.black}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <Text style={styles.textFormat}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Confirm Password"
        placeholderTextColor={colors.textColor}
        color={colors.black}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      
      <Spacer height={20} />
      
      
      <TouchableOpacity style={styles.createButton} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  )
}

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
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  createButton: {
    backgroundColor: colors.primary,
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
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
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
})