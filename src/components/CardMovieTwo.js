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

export default class CardMovieTwo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { info, viewMovie } = this.props
        return (
            <TouchableOpacity onPress={() => {
                viewMovie(info)
                }}>
                <View style={styles.container}>
                    <Image source={{ uri: info.image }} style={styles.cardImage} />
                    <View style={styles.cardTitleContainer}>
                        <Text style={styles.cardTitle} numberOfLines={2}>{info.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 231,
        width: 135,
        backgroundColor: 'white',
        flexDirection: 'column',
        marginRight: 10,
        borderRadius: 3
    },
    cardImage: {
        width: 135,
        height: 184
    },
    cardTitleContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    cardTitle: {
        textAlign: 'center',
        color: 'black',
        fontSize: 13,
        fontWeight: '500',
        paddingHorizontal: 1
    }
});