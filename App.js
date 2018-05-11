import React, { Component } from 'react';
import { Font } from 'expo';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';

import backgroundImage from './assets/images/magic_forest_bg.jpg';

import CharacterComponent from './src/app/components/CharacterComponent';
import ScratchListComponent from './src/app/components/ScratchListComponent';

export default class App extends Component {
    state = {
        isFontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'scratcher-font': require('./assets/fonts/DRAguSans-Black.ttf'),
        });
        this.setState({isFontLoaded: true});
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.imageBackground} source={backgroundImage}>
                    <CharacterComponent/>
                    {(this.state.isFontLoaded) ? <ScratchListComponent isFontLoaded={this.state.fontLoaded}/> : null}
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