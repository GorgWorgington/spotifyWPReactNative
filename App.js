
import React, { Component } from 'react';
import {
	Alert,
	Linking,
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';
import {
	createSwitchNavigator,
	createAppContainer
} from 'react-navigation';

import InitialScreen from './Components/InitialScreen.js';
import PlayerScreen from './Components/PlayerScreen.js';

const App = createSwitchNavigator({
	initial: { screen:InitialScreen },
	player: { screen:PlayerScreen },
});

const AppContainer = createAppContainer(App);

export default AppContainer;