import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const BankSetUp = ({ navigation }) => {
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');

  const handleContinue = () => {
    navigation.navigate('Payment', {
      bankName: bankName,
      accountNumber: accountNumber,
      ifscCode: ifscCode,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bank Setup</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Bank Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter bank name"
          value={bankName}
          onChangeText={setBankName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Account Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter account number"
          value={accountNumber}
          onChangeText={setAccountNumber}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>IFSC Code</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter IFSC code"
          value={ifscCode}
          onChangeText={setIfscCode}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue to Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
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
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BankSetUp;
