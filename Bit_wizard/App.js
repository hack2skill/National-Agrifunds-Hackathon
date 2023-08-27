import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen'; // Make sure the path is correct
import PaymentSuccess from './screens/PaymentSuccess';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import PaymentScreen from './screens/PaymentScreen';
import InformationScreen from './screens/InformationScreen';
import LoansScreen from './screens/LoanScreen';
import ViewPoliciesScreen from './screens/PolicyScreen';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './translations/en.json';
import hiTranslation from './translations/hi.json';
import 'intl-pluralrules';
import 'intl';
import 'intl/locale-data/jsonp/en';
import 'intl/locale-data/jsonp/hi';
import 'intl-messageformat';
import OtpScreen from './screens/OtpScreen';
import StartScreen from './screens/StartScreen';
import PaymentSetUp from './screens/PaymentSetUp';
import BankSetUp from './screens/BankSetUp';
import LoanApplySuccess from './screens/LoanApplySuccess';


i18n.use(initReactI18next).init({
  lng: 'en', // Default language
  fallbackLng: 'en',
  resources: {
    en: { common: enTranslation },
    hi: { common: hiTranslation }
  }
});

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Ease-Pay">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Ease-Pay" component={StartScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="OTP" component={OtpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Transactions" component={InformationScreen} />
        <Stack.Screen name="Loans" component={LoansScreen} />
        <Stack.Screen name="Policies" component={ViewPoliciesScreen} />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
        <Stack.Screen name="PaymentSetUp" component={PaymentSetUp} />
        <Stack.Screen name="LoanApplySuccess" component={LoanApplySuccess} />
        <Stack.Screen name="BankSetUp" component={BankSetUp} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
