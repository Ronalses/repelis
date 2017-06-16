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
    TouchableOpacity,
    TouchableHighlight
} from 'react-native'

import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons'

export default class CardMovieThree extends Component {
    constructor(props) {
        super(props)
    }
        

    render() {
        const { info, viewMovie } = this.props;
        return (
            <View style={styles.container}>
                <Image source={{ uri: info.image }} style={styles.imageBack} />
                <View style={styles.estreno}> 
                    <View style={styles.icon}>
                        <Icon name="md-star" size={16} color="#F5B642" />
                    </View>
                    <Text style={styles.textEstreno}>Estreno</Text>
                </View>
                <View style={styles.cardContainer}>
                    <Image source={{ uri: info.image }} style={styles.cardImage} />
                    <View style={styles.cardDetalles}>
                        <Text style={styles.cardTitle}>{info.title}</Text>
                        <Text style={styles.cardGenero}>{info.genero}</Text>
                        <Text style={styles.cardDescriptionText} numberOfLines={3}>
                            {info.description}
                        </Text>
                        <TouchableOpacity activeOpacity={0.9} onPress={() => {
                            viewMovie(info)
                        }}>
                            <View style={styles.viewButtom}>
                                <Text style={styles.buttomText}>Ver mas</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBack: {
        height: 250,
        //resizeMode: 'stretch',
        opacity: 0.2,
        backgroundColor: 'black'
    },
    cardContainer: {
        position: 'absolute',
        top: 32,
        right: 16,
        left: 16,
        flexDirection: 'row'
    },
    estreno:{
        position:'absolute',
        flexDirection:'row',
        flex:1,
        right: 10,
        top:5,
        opacity:1
    },
    textEstreno:{
        paddingLeft:3,
        fontSize:15,
        color:'white'
    },
    cardImage: {
        backgroundColor: 'white',
        height: 184,
        width: 135,
        //borderTopLeftRadius: 4,
        //borderBottomLeftRadius: 4
    },
    cardTitle: {
        color: 'white',
        fontSize: 19,
        fontWeight: '400',
        paddingTop: 10,
    },
    cardGenero: {
        color: 'white',
        fontSize: 10,
        //fontWeight: '400',
        paddingTop: 10
    },
    cardDescriptionText: {
        paddingTop: 10,
        color: '#f7f7f7',
        fontSize: 13,
        //fontWeight: '200'
    },
    cardDetalles: {
        flex: 1,
        paddingLeft: 10,
    },
    cardDatos: {
        flexDirection: 'row',
    },
    cardDatosItem: {
        fontSize: 11
    },
    viewButtom: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7,
        backgroundColor: '#EA0000',
        borderRadius: 3,
        width: 100,
        //height:40,
        marginTop: 10
    },
    buttomText: {
        color: 'white'
    },
    icon: {
        paddingTop: 2,
        paddingLeft: 3
    }
});