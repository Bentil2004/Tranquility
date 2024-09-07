import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const SettingsScreen = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.backButton} onPress={() => navigation.navigate('Profile')}>←</Text>
        <Text style={styles.headerText}>{t('Settings')}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CountryLanguageSearch')}>
        <Text style={styles.buttonText}>{t('Language')}</Text>
        <Text style={styles.arrow}>→</Text>
      </TouchableOpacity>
      <Text style={styles.appVersion}>{t('App Version 1.00')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#7459AA',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 30,
  },
  backButton: {
    color: 'white',
    fontSize: 30,
    top: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    marginLeft: 80,
    marginTop: 25,
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#7459AA',
    marginHorizontal: 15,
    marginTop: 25,
    borderRadius: 5,
    top: 40,
  },
  buttonText: {
    fontSize: 16,
    color: '#7459AA',
  },
  arrow: {
    fontSize: 16,
  },
  appVersion: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    color: '#7459AA',
  },
});

export default SettingsScreen;
