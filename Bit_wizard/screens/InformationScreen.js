import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const InformationScreen = () => {
  // Sample transaction history data
  const transactionHistory = [
    { id: '1', description: 'Payment to Ramesh kumar', amount: '-₹50.00' },
    { id: '2', description: 'Payment to Harsh Naik', amount: '-₹25.00' },
    // Add more transaction history entries as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>
      <Text style={styles.infoText}>
        Account Balance = ₹100.00
      </Text>
      <Text style={styles.subTitle}>Recent Transactions:</Text>
      <FlatList
        data={transactionHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Text>{item.description}</Text>
            <Text>{item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'justify',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
});

export default InformationScreen;
