import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PaymentScreen = ({ navigation }) => {
  const [paymentInProgress, setPaymentInProgress] = useState(false);

  const handlePayment = () => {
    // Simulate payment process
    setPaymentInProgress(true);
    setTimeout(() => {
      setPaymentInProgress(false);
      navigation.navigate('PaymentSuccess'); // Navigate to PaymentSuccess after payment completes
      setTimeout(() => {
        navigation.goBack(); // Automatically go back to PaymentScreen after 3 seconds
      }, 3000);
    }, 3000); // Simulate payment process for 3 seconds
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Recipient's Mobile Number</Text>
        <TextInput style={styles.input} placeholder="Enter recipient's number" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Amount</Text>
        <TextInput style={styles.input} placeholder="Enter amount" keyboardType="numeric" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Secret PIN</Text>
        <TextInput style={styles.input} placeholder="Enter pin" keyboardType="numeric" />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handlePayment}
        disabled={paymentInProgress} // Disable the button during payment process
      >
        <Text style={styles.buttonText}>
          {paymentInProgress ? 'Payment in Process...' : 'Make Payment'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PaymentScreen;
