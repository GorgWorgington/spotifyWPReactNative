/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
    auth,
    remote,
    ApiConfig,
    ApiScope,
    SpotifyRemoteApi,
    PlayerState,
    PlayerContext,
    RepeatMode,
    ContentItem,
    SpotifyAuth
} from 'react-native-spotify-remote';

import SpotifyPlayer from './Components/SpotifyPlayer';

const spotifyConfig = {
    clientID: "9968bd20805046b28015e835cda19261",
    redirectURL: "spotifyreactnative://spotify-player",
    scope: ApiScope.AppRemoteControlScope | ApiScope.UserFollowReadScope
}

const App: () => Node = () => {
  console.log("entering App()");
  // const token = ""
  const token = auth.authorize(spotifyConfig)
  // .catch(() => {
  //   console.log("failed to authorize");
  // })
  ;

  remote.connect(token).then(() => {
    console.log("connected");
  }).catch(() => {
    console.log("failed to connect");
  });
  remote.playUri("spotify:track:5BYWuQEiyb6bxJGWIvsnpF").catch(() => {
    console.log("failed to play uri");
  });

  return (
	  <View style={{flex: 1}}>
      <SpotifyPlayer />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
