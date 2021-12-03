import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { WebView } from 'react-native-webview';


const SpotifyWebView = () => {
	return (
		<View style={{ flex: 1 }}>
			<WebView  originWhitelist={['*']}
                source={{ uri: "https://bitmovin.com/demos/drm" }}
                javaScriptEnabled={true}
                mixedContentMode='always'
                allowFileAccess={true}
                allowFileAccessFromFileURLs={true}
                injectedJavaScriptBeforeContentLoaded={`
                  window.onerror = function(message, sourcefile, lineno, colno, error) {
                    alert("Message: " + message + " - Source: " + sourcefile + " Line: " + lineno + ":" + colno);
                    return true;
                  };
                  true;
                `}
            />
		</View>
	)
}

export default SpotifyWebView;