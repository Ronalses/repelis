/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	ScrollView,
	Linking
} from 'react-native';

import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons';


export default class Reproductor extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		let { players } = this.props.info
		return (
			<ScrollView style={styles.container}>
				<View style={styles.containerTitle}><Text style={styles.titleRecomendado}>Recomendado</Text></View>
				{
					players.map(player => {
						if (player.title === 'Openload' || player.title === 'Ok.ru') {
							return (
								<ServidorPlayer player={player} key={player.link} />
							)
						}
					})
				}
				<View style={styles.containerTitle}><Text style={styles.titleRecomendado}>Alternativas</Text></View>
				{
					players.map(player => {
						if (player.title != 'Openload' &&  player.title != 'Ok.ru') {
							return (
								<ServidorPlayerAlternative player={player} key={player.link} />
							)
						}
					})
				}
			</ScrollView>
		);
	}
}

class ServidorPlayer extends Component {
	
	_onPresButton(url) {
		Actions.webViewReproductor({ url })
	}

	render() {
		let { player } = this.props
		return (
			<View style={styles.containerRepro} key={player.link}>
				<TouchableHighlight onPress={() => {
					this._onPresButton(player.link)
				}} style={styles.button} underlayColor={'transparent'}>
					<Icon name='ios-play-outline' size={40} color="#900" />
				</TouchableHighlight>
				<View style={styles.cantainerItems}><Text style={styles.textReproductor}>{player.title}</Text></View>
				<View style={styles.cantainerItems}><Text style={styles.textReproductor}>{player.audio}</Text></View>
				<View style={styles.cantainerItems}><Text style={styles.textReproductor}>{player.quality}</Text></View>
			</View>
		)
	}
}

class ServidorPlayerAlternative extends Component {

	render() {
		let { player } = this.props
		return (
			<View style={styles.containerRepro} key={player.link}>
				<TouchableHighlight onPress={() => {
					Linking.openURL(player.link)
				}} style={styles.button} underlayColor={'transparent'}>
					<Icon name='ios-play-outline' size={40} color="#900" />
				</TouchableHighlight>
				<View style={styles.cantainerItems}><Text style={styles.textReproductor}>{player.title}</Text></View>
				<View style={styles.cantainerItems}><Text style={styles.textReproductor}>{player.audio}</Text></View>
				<View style={styles.cantainerItems}><Text style={styles.textReproductor}>{player.quality}</Text></View>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		paddingHorizontal: 20
	},
	containerTitle: {
		marginBottom: 10
	},
	titleRecomendado: {
		color: 'white',
		fontSize: 20,
		textAlign: 'center'
	},
	containerRepro: {
		flexDirection: 'row',
		marginBottom: 15,
		//justifyContent: 'space-between'
	},
	cantainerItems: {
		flex: 1,
		alignItems: 'center'
		//flexDirection:'row'
	},
	button: {
		width: 40,
		//padding: 6,
		borderRadius: 50
	},
	textReproductor: {
		color: 'white',
		fontSize: 15,
		paddingTop: 10
	}
});