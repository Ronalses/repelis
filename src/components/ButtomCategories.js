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
    TouchableOpacity
} from 'react-native';

export default class Info extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const { categorie, viewList, viewMovie } = this.props
        return (
            <TouchableOpacity activeOpacity={0.9} onPress={() => viewList(categorie,viewMovie)}>
                <View style={styles.viewButtom}>
                    <Text style={styles.buttomText} numberOfLines={1}>{categorie}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    viewButtom: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7,
        backgroundColor: '#23252B',
        borderRadius: 3,
        width: 100,
        //height:40,
        marginTop: 5,
        //marginLeft:4
        marginHorizontal:2
    },
    buttomText: {
        color: '#ecf0f1'
    }
});