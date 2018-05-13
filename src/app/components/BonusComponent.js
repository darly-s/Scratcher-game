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

const bonusComponent = () => (
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

export default bonusComponent;
