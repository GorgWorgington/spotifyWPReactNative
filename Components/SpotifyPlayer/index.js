// @flex
import React from 'react';

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
		{/* container for control buttons */}
		<View style={{ flexDirection: 'row' }}> 
			<Button style={styles.playerButton}
				title="<<"
				color='#3DC063'
			/>
			<Button style={styles.playerButton}
				title="Pause"
				color='#3DC063'
			/>
			<Button style={styles.playerButton}
				title=">>"
				color='#3DC063'
			/>

		</View>
    </View>
  )
}


const styles = StyleSheet.create({
  spotifyPlayer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: '#292929',
	color: '#fff',
	height: 400,
    // flex: 1
  },
  playerButton: {
	  backgroundColor: '#3DC063',
	  margin: 10,
	  flex: 1,
  },

});

export default SpotifyPlayer;