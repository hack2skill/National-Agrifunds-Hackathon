import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo vector icons

const PaymentSuccess = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.goBack(); // Automatically go back to HomeScreen after 3 seconds
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Ionicons name="md-checkmark-circle-outline" size={100} color="#0079FF" />
      <Text style={styles.message}>Your payment is successfully processed, please check transaction history for updates.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center', // Center-align the text horizontally
    marginTop: 20, // Add some spacing between the icon and the text
  },
});

export default PaymentSuccess;
