import {View, Text} from 'react-native';
import React from 'react';
import {Vimeo} from 'react-native-vimeo-iframe';
import WebView from 'react-native-webview';

export default function VimeoPlayer() {
  return (
    <>
      <VimeoComp />
    </>
  );
}

const WebViewIframe = () => {
  return (
    <View style={{height: 260, width: '100%'}}>
      <WebView
        style={{
          padding: 0,
          margin: 0,
          backgroundColor: 'red',
        }}
        source={{
          html: ` 
         <iframe 
         src="https://player.vimeo.com/video/76979871" 
         width="100%" height="600" 
         frameborder="0" 
         webkitallowfullscreen mozallowfullscreen allowfullscreen />
        `,
        }}
      />
    </View>
  );
};

const VimeoComp = () => {
  return (
    <View style={{height: 260, width: '100%'}}>
      <Vimeo
        style={{padding: 0, margin: 0, backgroundColor: 'lightblue'}}
        videoId={'76979871'}
        onReady={() => console.log('Video is ready')}
        onPlay={() => console.log('Video is playing')}
        onPlayProgress={data => console.log('Video progress data:', data)}
        onFinish={() => console.log('Video is finished')}
        loop={false}
        autoPlay={false}
        controls={true}
        speed={false}
        time={'0m0s'}
      />
    </View>
  );
};
