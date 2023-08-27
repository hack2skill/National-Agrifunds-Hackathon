import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import { FontAwesome5 } from "@expo/vector-icons";

const StartScreen = ({ navigation }) => {
  const [isBiometricAvailable, setIsBiometricAvailable] = useState(false);

  useEffect(() => {
    checkBiometricAvailability();
  }, []);

  const checkBiometricAvailability = async () => {
    const available = await LocalAuthentication.hasHardwareAsync();
    setIsBiometricAvailable(available);
  };

  const onPressAuthenticate = async () => {
    try {
      const authenticated = await LocalAuthentication.authenticateAsync();
      if (authenticated.success) {
        navigateToLogin();
      } else {
        console.log("Biometric authentication failed or canceled.");
        navigateToLogin();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {isBiometricAvailable ? (
          <TouchableOpacity
            style={styles.iconButton}
            onPress={onPressAuthenticate}
          >
            <FontAwesome5 name="fingerprint" size={120} color="gray" />
          </TouchableOpacity>
        ) : (
          <FontAwesome5 name="fingerprint" size={120} color="gray" />
        )}
      </View>
      <Text style={styles.title}>Biometric Authentication</Text>
      <Text style={styles.subtitle}>
        Use your fingerprint or face to log in securely.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  iconContainer: {
    marginBottom: 30,
  },
  iconButton: {
    padding: 20,
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#007BFF",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 30,
    color: "#666",
  },
});

export default StartScreen;
