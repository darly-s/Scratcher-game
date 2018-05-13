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
import { setState } from './SuccessComponent';

import cover from '../../../assets/images/magic_forest_scratch_frame_big.png';
import coin from '../../../assets/images/magic_forest_coin_icon_small.png';
import dollar from '../../../assets/images/magic_forest_dollar_icon.png';

/**
 *
 * @param {boolean} isAnimationPlayed   - Flag that allows to check whether an animation was played or not
 * @function checkBonus                 - Checking bonusComponent for content visibility status
 * @param {number} height               - Screen height
 * @param {number} ratio                - Scratch card width and height, based on screen height
 * @param {object} app                  - WebGL context for bonus scratch card
 * @param {blob} image                  - Random image for bonus scratch card
 * @param {Object} handlers             - Handle pan events on current scratch card
 *
 */
let isAnimationPlayed = false;
const checkBonus = (status) => {
    if (status && !isAnimationPlayed) {
        const amount = (Math.random() >= 0.8) ? 25 : 1;
        const image = (amount === 25) ? coin : dollar;
        Animations.Red.happyBonus();
        setState({isWin: true, isVisible: true, amount, image});
        isAnimationPlayed = true;
    }
};
const {height} = Dimensions.get('window');
const ratio = height / 6;
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

/**
 * @class bonusComponent - Represents the bonus scratch card component
 */

const bonusComponent = () => (
    <View style={styles.containerScratch}>
        <ScratchView handlers={handlers} style={styles.flex}>
            <View style={styles.flex}>
                <Expo.GLView
                    style={styles.flex}
                    onContextCreate={async context => {
                        app(context, {image, cover, handlers, status: checkBonus});
                    }}
                />
            </View>
        </ScratchView>
    </View>
);


const styles = StyleSheet.create({
    containerScratch: {
        width: ratio,
        height: ratio,
        top: '42%',
        right: '3%',
        alignSelf: 'center'
    },
    flex: {
        flex: 1
    }
});

export default bonusComponent;
