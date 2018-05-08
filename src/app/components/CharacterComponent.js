import React from 'react';
import { View, ImageBackground, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import PixiBaseView from './Views/PixiBaseView';
import Animations from './Animations/index';
import ScratchComponent from './ScratchComponent';

import winnerImage from '../../../assets/images/magic_forest_winner_frame.png';

const characterComponent = () => (
    <View style={styles.characterContainer}>
        <View style={styles.character}>
            <PixiBaseView app={Animations.Idle.default}/>
        </View>
        <ImageBackground style={styles.winnerContainer}
                         imageStyle={styles.winnerImage}
                         source={winnerImage}
                         onLayout={(event) => {
                             imgBgWidth = event.nativeEvent.layout.width;
                             imgBgHeight = event.nativeEvent.layout.height;
                         }}>
            <ScratchComponent imgWidth={imgBgWidth} imgHeight={imgBgHeight}/>
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

let imgBgWidth;
let imgBgHeight;

export default characterComponent;
