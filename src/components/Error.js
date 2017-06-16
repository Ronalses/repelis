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
    Image,
    TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import { Actions } from 'react-native-router-flux'

export default class Error extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let { refresh } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.containerText}>
                    <Text style={styles.title}>Ocurrio un error :( al intentar cargar los datos</Text>
                </View>
                <TouchableOpacity onPress={() => refresh()}>
                    <Icon name="md-refresh" size={60} color="#EA0000" />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerText: {
        marginHorizontal: 50,
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    }
});