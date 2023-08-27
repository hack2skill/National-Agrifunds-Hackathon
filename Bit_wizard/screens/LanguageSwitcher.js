import React from 'react';
import { View, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <View>
      <Button title="English" onPress={() => handleLanguageChange('en')} />
      <Button title="हिन्दी" onPress={() => handleLanguageChange('hi')} />
    </View>
  );
};

export default LanguageSwitcher;
