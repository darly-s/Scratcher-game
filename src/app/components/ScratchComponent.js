import React from 'react';
import Expo from 'expo';
import { View, Dimensions, StyleSheet, PixelRatio, TouchableWithoutFeedback } from 'react-native';
import Animations from './Animations';
import ScratchView from './Views/ScratchView';

const app = Animations.Card.default;

const scratchComponent = () => (
    <View style={styles.containerScratch}>
        <ScratchView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Expo.GLView
                    style={{ flex: 1 }}
                    onContextCreate={async context => {
                        const events = (await app(context)) || {};
                    }}
                />
            </View>
        </ScratchView>
    </View>
);

const {height} = Dimensions.get('window');
const ratio = height / 6;

const styles = StyleSheet.create({
    containerScratch: {
        width: ratio,
        height: ratio,
        top: '42%',
        right: '3%',
        alignSelf: 'center',
        borderWidth: 2
    }
});

export default scratchComponent;
