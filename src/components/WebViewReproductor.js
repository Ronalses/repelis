import React, { Component } from 'react';
import {
    StyleSheet,
    ListView,
    WebView,
    Linking,
    View,
    TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux'

import Icon from 'react-native-vector-icons/Ionicons'

export default class WebViewReproductor extends Component {
    constructor(props) {
        super(props)
    }

    _onPresButton() {
        Actions.pop()
    }

    render() {
        const uri = this.props.url
        return (
            <View style={styles.container}>
                <WebView
                    ref={(ref) => { this.webview = ref; }}
                    source={{ uri }}
                    style={styles.webview}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    mixedContentMode='compatibility'
                    onNavigationStateChange={(event) => {
                        if (event.url !== uri) {
                            this.webview.stopLoading();
                            Linking.openURL(event.url);
                        }
                    }}
                />
                <TouchableHighlight onPress={this._onPresButton}
                    style={styles.button} underlayColor={'transparent'}>
                    <Icon name='ios-arrow-round-back' size={40} color="red" />
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    webview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0a0a0a',
    },
    button: {
        position: 'absolute',
        top: 0,
        right: 16,
        left: 16,
    },
});