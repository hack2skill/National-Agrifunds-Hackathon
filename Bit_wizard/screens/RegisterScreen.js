import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNetInfo } from "@react-native-community/netinfo";
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons

const RegisterScreen = ({ navigation }) => {
  const netInfo = useNetInfo();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [panCardNumber, setPanCardNumber] = useState('');
  const [dob, setDOB] = useState('');


  
  const handleRegister = () => {
    // Implement your registration logic here
    // For example, you can validate the inputs and register the user
    // Navigate to the HomeScreen upon successful registration
    if (!netInfo.isConnected) {
      Alert.alert(
        'No Internet Connection',
        'Please connect to the internet to proceed.',
        [{ text: 'OK' }],
        { cancelable: false }
      );
      return;
    }
    navigation.navigate('Ease-Pay');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <View style={styles.iconInput}>
        <FontAwesome name="user" size={20} color="#007BFF" />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>
      <View style={styles.iconInput}>
        <FontAwesome name="envelope" size={20} color="#007BFF" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.iconInput}>
        <FontAwesome name="phone" size={20} color="#007BFF" />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      <View style={styles.iconInput}>
        <FontAwesome name="id-card" size={20} color="#007BFF" />
        <TextInput
        style={styles.input}
        placeholder="Aadhar Number"
        keyboardType="numeric"
        value={aadharNumber}
        onChangeText={setAadharNumber}
      />
      </View>
      <View style={styles.iconInput}>
        <FontAwesome name="id-card" size={20} color="#007BFF" />
        <TextInput
        style={styles.input}
        placeholder="Pan Card Number"
        value={panCardNumber}
        onChangeText={setPanCardNumber}
      />
      </View>
      
      
      <View style={styles.iconInput}>
        <FontAwesome name="calendar" size={20} color="#007BFF" />
        <TextInput
          style={styles.input}
          placeholder="Date of Birth (MM/DD/YYYY)"
          value={dob}
          onChangeText={setDOB}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Ease-Pay')}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  iconInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginText: {
    color: '#007BFF',
    fontSize: 16,
  },
});

export default RegisterScreen;
