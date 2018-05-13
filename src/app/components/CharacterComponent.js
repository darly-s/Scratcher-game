import React from 'react';
import { View, Image, ImageBackground, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import Animations from './Animations/index';
import BonusComponent from './BonusComponent';
import SuccessComponent from './SuccessComponent'

import winnerFrame from '../../../assets/images/magic_forest_winner_frame.png';
import winnerImage from '../../../assets/images/magic_forest_winner.png';

app = Animations.Red.default;

const characterComponent = () => (
    <View style={styles.characterContainer}>
        <SuccessComponent/>
        <View style={styles.character}>
            <Expo.GLView
                style={{flex: 1}}
                onContextCreate={async context => {
                    app(context);
                }}
            />
        </View>
        <ImageBackground style={styles.winnerContainer}
                         imageStyle={styles.winnerFrame}
                         source={winnerFrame}>
            <Image style={styles.winnerImage} source={winnerImage}/>
            <BonusComponent/>
        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
    characterContainer: {
        width: '100%',
        height: '50%',
        flexDirection: 'row',
    },
    character: {
        width: '50%',
        height: '100%'
    },
    winnerContainer: {
        width: '50%',
        height: '100%'
    },
    winnerFrame: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain'
    },
    winnerImage: {
        width: '50%',
        height: '5%',
        top: '35%',
        left: '20%',
        position: 'absolute',
}
});

export default characterComponent;
