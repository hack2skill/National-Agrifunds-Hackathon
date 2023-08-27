import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Modal } from 'react-native';

const LoansScreen = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [income, setIncome] = useState('');
  const [employmentType, setEmploymentType] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false); // State to control modal visibility

  const handleApply = () => {
    // Implement your loan application logic here
    // For example, you can validate the fields and submit the application
    // You can also show a confirmation message to the user
    setIsModalVisible(true); // Show the modal when user clicks on Apply
    setTimeout(() => {
      setIsModalVisible(false); // Hide the modal after 3 seconds
    }, 3000);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Apply for a Loan</Text>
      <Text style={styles.subtitle}>Loan Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Loan Amount (₹)"
        value={loanAmount}
        onChangeText={setLoanAmount}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Annual Income (₹)"
        value={income}
        onChangeText={setIncome}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Employment Type"
        value={employmentType}
        onChangeText={setEmploymentType}
      />

      <Text style={styles.subtitle}>Loan Information</Text>
      <Text style={styles.infoText}>
        Be aware of your rights and responsibilities as a borrower, including any collateral requirements.
        Understand the impact on your credit score due to reporting to credit bureaus.
        For questions or clarifications, contact our customer service.
        Remember, loans involve financial commitment; ensure you comprehend all terms before proceeding.
        This disclaimer is not exhaustive; refer to your loan agreement for comprehensive details.
      </Text>

      <Text style={styles.subtitle}>Disclaimer</Text>
      <Text style={styles.disclaimerText}>
        This information provided is for demonstration purposes only.
        The loan application is not real and will not result in an actual loan approval or its disbursement.
      </Text>

      <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>

      {/* Modal for "Applied Successfully" */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Applied Successfully</Text>
          </View>
        </View>
      </Modal>
    </ScrollView>
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
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 15,
  },
  disclaimerText: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 30,
  },
  applyButton: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  applyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
  },
});

export default LoansScreen;
