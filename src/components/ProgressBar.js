import React from 'react';
import {
    View,
    ActivityIndicator,
    StyleSheet
} from 'react-native'

ProgressBar = () => (
    <View>
        <ActivityIndicator size='large' color={"#EA0000"}/>
    </View>
)

const style = StyleSheet.create({
    ProgressBar:{
        flex:1,
        justifyContent:'center'
    }
})

export default ProgressBar