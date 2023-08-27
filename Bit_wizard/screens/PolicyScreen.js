import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const policies = [
  { title: 'Crop Insurance', description: 'Insurance coverage for crop damages due to natural disasters.' },
  { title: 'Livestock Insurance', description: 'Coverage for livestock losses and diseases.' },
  { title: 'Farm Equipment Loan', description: 'Loan for purchasing farm equipment with flexible repayment options.' },
  { title: 'Agricultural Subsidies', description: 'Government subsidies and support for agricultural practices.' },
  { title: 'Rural Development Fund', description: 'Funding for rural infrastructure development projects.' },
  { title: 'Soil Health Management', description: 'Programs to improve soil fertility and health for better yields.' },
];

const ViewPoliciesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>View Policies</Text>
      {policies.map((policy, index) => (
        <TouchableOpacity key={index} style={styles.policyCard}>
          <Text style={styles.policyTitle}>{policy.title}</Text>
          <Text style={styles.policyDescription}>{policy.description}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  policyCard: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    elevation: 3,
  },
  policyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  policyDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default ViewPoliciesScreen;
