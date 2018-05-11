import React from 'react';
import { View, ImageBackground, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import Animations from './Animations/index';
import ScratchComponent from './ScratchComponent';

import winnerImage from '../../../assets/images/magic_forest_winner_frame.png';

app = Animations.Red.default;

const characterComponent = () => (
    <View style={styles.characterContainer}>
        <TouchableWithoutFeedback onPress={() => Animations.Red.emit()}>
            <View style={styles.character}>
                <Expo.GLView
                    style={{flex: 1}}
                    onContextCreate={async context => {
                        const events = (await app(context)) || {};
                    }}
                />
            </View>
        </TouchableWithoutFeedback>
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
