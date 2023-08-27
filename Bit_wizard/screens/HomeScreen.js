import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set this based on your authentication status
  const [firstTimePayment, setFirstTimePayment] = useState(true);

  const handleLogout = () => {
    // Implement logout logic here
    navigation.navigate('Ease-Pay');
  };

  const cards = [
    { title: 'Make a Payment', icon: 'credit-card', screen: firstTimePayment ? 'PaymentSetUp' : 'Payment' },
    { title: 'Transaction History', icon: 'info', screen: 'Transactions' },
    { title: 'Apply for Loans', icon: 'dollar-sign' , screen: 'Loans' },
    { title: 'View Policies', icon: 'file-text', screen: 'Policies' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>Ease-Pay App</Text>
        {isLoggedIn ? (
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Feather name="log-out" size={24} color="white" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Ease-Pay')}
          >
            <Text style={styles.loginButtonText}>Ease-Pay</Text>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {cards.map((card, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => {
              if (card.title === 'Make Payment') {
                setFirstTimePayment(false); // Mark as not the first time if the user clicks "Make a Payment"
              }
              navigation.navigate(card.screen);
            }}
          >
            <Feather name={card.icon} size={40} color="white" />
            <Text style={styles.cardTitle}>{card.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  loginButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  logoutButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#d9534f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    marginTop: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 100,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    justifyContent: 'flex-start',
    paddingLeft: 15,
    marginBottom: 15,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'white',
  },
});

export default HomeScreen;