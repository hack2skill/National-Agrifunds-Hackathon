import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo vector icons

const LoanApplySuccess = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home'); // Automatically go back to LoanApplyScreen after 3 seconds
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Ionicons name="md-checkmark-circle-outline" size={100} color="green" />
      <Text style={styles.message}>Loan Application Successful</Text>
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
  },
});

export default LoanApplySuccess;
