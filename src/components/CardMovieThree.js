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
} from 'react-native';

export default class CardMovieThree extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {info, viewMovie } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.9} onPress={()=>{viewMovie(info)}}>
                    <View style={styles.card}>
                        <Image source={{uri: info.image}} style={styles.cardImage}/>
                        <View style={styles.cardDetails}>
                            <Text style={styles.cardTitle} numberOfLines={3}>
                                {info.title}
                            </Text>
                            <View style={styles.cardDatos}>
                                <Text style={styles.cardDatosItem}>{info.year}</Text>
                            </View>
                            <Text style={styles.cardDescription} numberOfLines={3}>
                                {info.description}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16
    },
    card:{
        backgroundColor: 'white',
        borderRadius: 3,
        minHeight: 148,
        flexDirection: 'row',
        paddingRight: 16,
        overflow: 'hidden',
    },
    cardImage:{
        height:163,
        width: 120,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3
    },
    cardTitle:{
        color:'black',
        fontSize: 15,
        fontWeight: '400',
        paddingTop: 10
    },
    cardDetails:{
        paddingLeft:10,
        flex:1
    },
    cardDatos:{
        flexDirection:'row',
        marginVertical:3
    },
    cardDatosItem:{
        fontSize:11
    }
});