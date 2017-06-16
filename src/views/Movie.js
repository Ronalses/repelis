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
    ScrollView,
    Image,
    TouchableHighlight
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons'

import Info from '../tabs/Info'
import Reproductor from '../tabs/Reproductor'
import DefaultTabBar from '../tabs/scrollableTabView/DefaultTabBar'
import Triler from '../tabs/trailer'

export default class Movie extends Component {
    constructor(props) {
        super(props)
    }

    _onPresButton() {
        Actions.pop()
    }

    render() {
        let { info } = this.props
        return (
            <ScrollView
                style={styles.container}
                scrollEventThrottle={100}
            >
                <View style={styles.containerPeli}>
                    <Image style={styles.imageBack} source={{ uri: info.image }} />
                    <TouchableHighlight onPress={this._onPresButton}
                        style={styles.button} underlayColor={'transparent'}>
                        <Icon name='ios-arrow-round-back' size={40} color="red" />
                    </TouchableHighlight>
                    <View style={styles.cardContainer}>
                        <Image source={{ uri: info.image }} style={styles.cardImage} />
                        <View style={styles.cardDetails}>
                            <Text style={styles.cardTitle}>{info.title}</Text>
                            <Text style={styles.cardYear}>{info.year}</Text>
                        </View>
                    </View>
                    <View style={styles.containerTapView}>
                        <ScrollableTabView
                            renderTabBar={() => (
                                <DefaultTabBar
                                    textStyle={styles.textStyle}
                                    underlineStyle={styles.underlineStyle}
                                    style={styles.tabBar}
                                />
                            )}
                        >
                            <Info tabLabel="Info" info={info} />
                            <Reproductor tabLabel='Pelicula' info={info} />
                            <Triler tabLabel='Trailer' info={info.trailer}/>
                        </ScrollableTabView>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    containerPeli: {
        //marginTop: 40,
        height: 1000,
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#0a0a0a',
    },
    imageBack: {
        opacity: 0.2,
        height: 248,
        resizeMode: 'stretch',
        backgroundColor: 'black',
    },
    button: {
        position: 'absolute',
        top: 0,
        right: 16,
        left: 16,
    },
    cardContainer: {
        flex: 1,
        position: 'absolute',
        top: 200,
        right: 16,
        left: 16,
        flexDirection: 'row',
    },
    cardImage: {
        height: 184,
        width: 135,
        borderRadius: 3
    },
    cardDetails: {
        paddingLeft: 10,
        flex: 1,
        paddingTop: 50,
    },
    cardTitle: {
        color: 'white',
        fontSize: 22,
        fontWeight: '500',
        paddingTop: 10
    },
    cardYear:{
        color: 'white',
        fontSize: 13,
        fontWeight: '500',
        paddingTop: 15
    },
    containerTapView: {
        flex: 1,
        marginTop: 157
    },
    textStyle: {
        color: 'white',
        paddingTop: 10,
        fontSize: 12,
        fontWeight: '400'
    },
    underlineStyle: {
        backgroundColor: 'red'
    },
    tabBar: {
        backgroundColor: '#23252B'
    }

});