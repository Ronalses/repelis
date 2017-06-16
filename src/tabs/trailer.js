import React, { Component } from 'react';
import {
    StyleSheet,
    ListView,
    WebView,
    Linking,
    View
} from 'react-native';

import ProgressBar from '../components/ProgressBar'
import Error from '../components/Error'

export default class Trailer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            chargeError: false
        }
    }
    render() {
        const uri = this.props.info
        return (
            <View style={styles.contianer}>
                <WebView
                    ref={(ref) => { this.webview = ref; }}
                    source={{ uri }}
                    style={styles.webview}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    mixedContentMode='always'
                    onLoadStart={() => {
                        //console.warn('comenzo')
                    }}
                    onError={() => {
                        this.setState({ chargeError: true })
                    }}
                    onLoadEnd={() => {
                        //console.warn('termino')
                        this.setState({ isLoading: false })
                    }}
                    onNavigationStateChange={(event) => {
                        if (event.url !== uri) {
                            console.warn('weyy')
                            this.webview.stopLoading();
                            Linking.openURL(event.url);
                        }
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contianer:{
        flex: 1,
    },
    webview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0a0a0a',
    }
});