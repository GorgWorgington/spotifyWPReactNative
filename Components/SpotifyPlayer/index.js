// @flex

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

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

const SpotifyPlayer = () => {


  return (
    <View style={styles.spotifyPlayer}>

    </View>
  )
}


const styles = StyleSheet.create({
  spotifyPlayer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: Colors.darker,
    flex: 1
  },
});