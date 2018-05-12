import React from 'react';
import { View, ImageBackground, StyleSheet, Text, Image } from 'react-native';

import winnerImage from '../../../assets/images/magic_forest_coin_icon_small.png';
import backgroundImage from '../../../assets/images/magic_forest_frame1.png';

const successComponent = () => (
    <View style={styles.componentContainer}>
        <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
            <Text style={styles.mainText}>YOU WIN</Text>
            <Text style={styles.coinText}>60 <Image style={{height: 26, width: 26}} source={winnerImage}/></Text>
        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
    },
    componentContainer: {
        width: '100%',
        height: '30%',
        position: 'absolute',
        justifyContent: 'center',
        alignContent: 'center',
        borderWidth: 2,
        top: '20%',
        zIndex: 2
    },
    mainText: {
        display: 'flex',
        width: '100%',
        fontFamily: 'scratcher-font',
        alignContent: 'center',
        fontSize: 26,
        color: 'red'
    },
    coinText: {
        display: 'flex',
        width: '100%',
        fontFamily: 'scratcher-font',
        alignContent: 'center',
        fontSize: 26,
        color: 'black'
    }
});

export default successComponent;