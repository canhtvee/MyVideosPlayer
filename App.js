import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import SurveyScreen from './src/screens/SurveyScreen';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <SurveyScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
});
