import React from 'react';
import {View, Text} from 'react-native';
import WebView from 'react-native-webview';

export default function WatchScreen() {
  const runFirst = () => {
    if (global.window) {
      global.window = global;
      setTimeout(() => window.ReactNativeWebView.postMessage('Hello!'), 2000);
    }
  };
  return (
    <View style={{flex: 1}}>
      <Text style={{height: 40, textAlign: 'center', fontSize: 24}}>
        This is WebView
      </Text>
      <WebViewComp />
    </View>
  );
}

const WebViewComp = () => {
  return (
    <WebView
      source={{uri: 'https://reactnavigation.org/docs/getting-started'}}
      onMessage={event => {
        alert(event.nativeEvent.data);
      }}
    />
  );
};
