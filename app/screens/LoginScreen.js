import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

import colors from "../constants/colors";
import Spacer from "../components/spacer";
import supabase from "../config/supabaseClient";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendVerification = async () => {
    if (!email || !email.includes("@")) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
      });
      console.log("Error", error);
      if (error) {
        Alert.alert("Error", error.message);
        setLoading(false);
        return;
      }

      Alert.alert("Success", "OTP sent successfully");
      navigation.navigate("OTPScreen", {
        email,
      });
    } catch (error) {
      console.log("Error", error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Enter your Email Address</Text>

      <Text style={styles.textFormat}>
        Please enter your email below to create your account
      </Text>

      <Spacer height={20}></Spacer>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.emailInput}
          placeholder="your@email.com"
          placeholderTextColor={colors.textColor}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
      </View>

      <Spacer height={50}></Spacer>

      <TouchableOpacity
        style={styles.sendOTPButton}
        onPress={handleSendVerification}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <Text style={styles.buttonText}>Verify Email</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 15,
  },
  textFormat: {
    color: colors.textColor,
    fontWeight: "bold",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 15,
    height: 50,    
  },
  emailInput: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  backButton: {
    backgroundColor: colors.white,
    width: "20%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    borderColor: colors.primary,
    borderWidth: 1,
    position: "absolute",
    top: 40,
    left: 20,
  },
  sendOTPButton: {
    backgroundColor: colors.primary,
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
});
