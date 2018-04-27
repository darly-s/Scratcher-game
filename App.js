import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';

import backgroundImage from './assets/images/magic_forest_bg.jpg';

import CharacterComponent from './src/app/components/CharacterComponent/CharacterComponent';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.imageBackground} source={backgroundImage}>
                    <CharacterComponent/>
                </ImageBackground>
            </View>
        );
    }
}

const {height, width} = Dimensions.get('window');
const ratio = 980 / 1920;
const imageWidth = ((width / height) <= ratio) ? 1 : (1 - ((width / height) - ratio));
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageBackground: {
        width: `${imageWidth * 100}%`,
        height: '100%',
    }
});