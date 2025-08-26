import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import colors from '../config/colors'
import Spacer from '../components/spacer'

export default function WelcomeScreen({ navigation}) {
  return (
    
    <ImageBackground style={styles.background} source={require("../assets/backgroundImage.jpg")}>
        <View style={styles.container}>
            <Text style={styles.title}>Mobikad</Text>

            <Spacer height={360} />

            <TouchableOpacity 
                style={styles.loginButton}
                onPress={() => navigation.navigate('LoginScreen')}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.createAccountButton} 
                onPress={() => navigation.navigate('CreateAccountScreen') }
            >
                <Text style={[styles.buttonText, {color: '#2a8cf5ff'}, ]}>Create Account</Text>
            </TouchableOpacity>  

            <Spacer height={20} />
            
            <View style={styles.orContinueWithContainer}>
                <View style={styles.line} />
                    <Text style={{marginHorizontal: 10}}> Or continue with </Text>
                <View style={styles.line} />
                
            </View>

            <Spacer height={80} />
        </View>

    </ImageBackground>
    
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    container: {
        padding: 20,
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
    },
    loginButton: {
        backgroundColor: colors.primary,
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    createAccountButton: {
        backgroundColor: colors.white,
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        borderColor: colors.primary,
        borderWidth: 1,
    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    orContinueWithContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
})
