import React from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    PixelRatio,
    TouchableWithoutFeedback
} from 'react-native';
import Expo from 'expo';

import Animations from './Animations';
import ScratchView from './Views/ScratchView';
import { chooseCard } from './Services/Cards.service';

import cover from '../../../assets/images/magic_forest_scratch_frame_big.png';

const checkBonus = (status) => (status) ? Animations.Red.happyBonus() : null;
const app = Animations.Card.default;
const image = chooseCard(Math.round(Math.random() * 4));
const handlers = {
    pointerMove: () => {
    },
    pointerDown: () => {
    },
    pointerUp: () => {
    }
};

const scratchComponent = () => (
    <View style={styles.containerScratch}>
        <ScratchView handlers={handlers} style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Expo.GLView
                    style={{flex: 1}}
                    onContextCreate={async context => {
                        app(context, {image, cover, handlers, status: checkBonus});
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
