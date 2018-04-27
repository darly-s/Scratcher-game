import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import backgroundImage from './assets/images/magic_forest_bg.jpg';

import CharacterComponent from './src/app/components/CharacterComponent/CharacterComponent';

export default class App extends Component {
    render() {
        alert(window.outerWidth);
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.imageBackground} source={backgroundImage}>
                    <CharacterComponent/>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageBackground: {
        width: '75%',
        height: '100%',
    }
});