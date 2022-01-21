import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import WebView from 'react-native-webview';
import VimeoPlayer from '../components/VimeoPlayer';

export default function WatchScreen() {
  return (
    <View style={{flex: 1}}>
      <VimeoPlayer />
    </View>
  );
}
