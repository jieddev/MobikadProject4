import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react'

import colors from '../config/colors'

const BackButton = (navigation) => {
  return (
    <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
    >
        <Icon name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
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
  })