import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import SurveyScreen from './src/screens/SurveyScreen';
import WatchScreen from './src/screens/WatchScreen';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <WatchScreen />
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
