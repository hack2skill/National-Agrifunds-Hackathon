import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const OtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const otpInputs = useRef([]);

  const handleOtpSubmission = () => {
    // Combine the individual OTP digits
    const enteredOtp = otp.join('');

    // Implement your OTP verification logic here
    // For example, you can compare the entered OTP with a valid OTP
    // and navigate to the HomeScreen upon successful verification
    const validOtp = '123456'; // Replace with your valid OTP
    if (enteredOtp === validOtp) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Invalid OTP', 'Please enter a valid OTP.', [{ text: 'OK' }], {
        cancelable: false,
      });
    }
  };

  const handleOtpInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    // Focus on the next input or navigate to the next screen after all OTP digits are entered
    if (index < otp.length - 1) {
      otpInputs.current[index + 1].focus();
    } else {
      
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={digit}
            onChangeText={(value) => handleOtpInputChange(index, value)}
            keyboardType="numeric"
            maxLength={1}
            ref={(ref) => otpInputs.current[index] = ref}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleOtpSubmission}>
        <Text style={styles.buttonText}>Submit OTP</Text>
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
    padding: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#007BFF',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '70%',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OtpScreen;
