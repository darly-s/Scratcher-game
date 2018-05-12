import React from 'react';
import { View, ImageBackground, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import Animations from './Animations/index';
import ScratchComponent from './ScratchComponent';
import SuccessComponent from './SuccessComponent'

import winnerImage from '../../../assets/images/magic_forest_winner_frame.png';

app = Animations.Red.default;
let isWin = false;

const characterComponent = () => (
    <View style={styles.characterContainer}>
        {(isWin) ? <SuccessComponent/> : null}
        <View style={styles.character}>
            <Expo.GLView
                style={{flex: 1}}
                onContextCreate={async context => {
                    app(context);
                }}
            />
        </View>
        <ImageBackground style={styles.winnerContainer}
                         imageStyle={styles.winnerImage}
                         source={winnerImage}>
            <ScratchComponent/>
        </ImageBackground>
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
