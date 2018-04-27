import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

import PixiBaseView from '../Views/PixiBaseView';

import Animations from '../Animations';

import winnerImage from '../../../../assets/images/magic_forest_winner_frame.png';

const characterComponent = () => (
    <View style={styles.characterContainer}>
        <View style={styles.character}>
            <PixiBaseView app={Animations.Red.default} />
        </View>
        <ImageBackground style={styles.winnerContainer}
                         imageStyle={styles.winnerImage}
                         source={winnerImage}></ImageBackground>
    </View>
);

const styles = StyleSheet.create({
    characterContainer: {
        width: '100%',
        height: '50%',
        borderWidth: 1,
        flexDirection: 'row',
    },
    character: {
        width: '50%',
        height: '100%',
        borderWidth: 1
    },
    winnerContainer: {
        width: '50%',
        height: '100%',
        borderWidth: 1,
    },
    winnerImage: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain'
    }
});

export default characterComponent;
