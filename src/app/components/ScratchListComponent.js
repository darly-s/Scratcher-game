import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';

import { chooseCard, chooseWinner, checkWinnerAmount } from './Services/Cards.service.js';
import { setState } from './SuccessComponent';

import backgroundText from '../../../assets/images/magic_forest_frame_for_text.png';
import cardBackground from '../../../assets/images/magic_forest_frame.png';
import cover from '../../../assets/images/magic_forest_scratch_frame.png';
import coin from '../../../assets/images/magic_forest_coin_icon_small.png';

import Animations from './Animations';
import ScratchView from './Views/ScratchView';
import HowToPlayComponent from '../../../src/app/components/HowToPlayComponent';
import StarterComponent from '../../../src/app/components/StarterComponent';

/**
 *
 * @param {object} app                               - WebGL context for scratch cards
 * @param {boolean}[] statuses                       - Visible statuses of scratch cards
 * @param {Object} globalParams                      - Handle global game status
 * @property {boolean}  globalParams.isWin           - Win or loose game status
 * @property {blob}  globalParams.winnerCard         - An image representing what was won (coins or dollars)
 * @property {boolean}  globalParams.isWinnerCompared - Is winnerCard compared with bonus card
 *
 */

const app = Animations.Card.default;
const statuses = [];
const globalParams = {isWin: null, winnerCard: null, isWinnerCompared: null};

/**
 * Checked game status and runs the related animation
 */

const checkStatus = () => {
    const isAllCardsVisible = statuses.filter(el => el).length === 6;
    if (isAllCardsVisible) {
        if (globalParams.isWin) {
            const amount = checkWinnerAmount(globalParams.winnerCard);
            Animations.Red.happyCard();
            setState({isWin: globalParams.isWin, isVisible: true, amount, image: coin})
        } else {
            Animations.Red.disappointed();
            setState({isWin: globalParams.isWin, isVisible: true})
        }
    }
};

/**
 *
 * Combining random images for scratch cards
 *
 *  @returns {blob}[] - List with images
 *
 */

const cardsCombine = () => {
    const isWin = Math.random() >= 0.7;
    const images = [];
    const unTaken = [];
    const shuffle = () => {
        while (images.length < 6) {
            let isSufficient;
            let isUnTaken;
            image = chooseCard(Math.round(Math.random() * 4));
            isUnTaken = !!unTaken.find(el => image === el);
            if (!isUnTaken) {
                isSufficient = images.filter(el => image === el).length >= 2;
                ((!isSufficient) ? images : unTaken).push(image);
            }
        }
        images.sort((a, b) => Math.random() - 0.5);
    };
    let image;
    if (!isWin) {
        shuffle();
    } else {
        const winnerCard = chooseWinner(Math.random());
        [1, 1, 1].map(() => images.push(winnerCard));
        shuffle();
        globalParams.winnerCard = winnerCard;
    }
    images.map(item => statuses.push(false));
    globalParams.isWin = isWin;
    return images;
};

/**
 * @class scratchListComponent - Represents a list of all scratch cards without a bonus card
 */

export default class scratchListComponent extends Component {
    render() {
        return (
            <View style={styles.containerScratch}>
                <ImageBackground style={styles.backgroundText} source={backgroundText}>
                    <Text style={styles.text}>MATCH THE WINNER AND WIN A PRIZE</Text>
                </ImageBackground>
                {
                    cardsCombine().map((image, index) => {
                        const handlers = {
                            pointerMove: () => {
                            },
                            pointerDown: () => {
                            },
                            pointerUp: () => {
                            }
                        };
                        return (
                            <ImageBackground key={index} style={styles.cardBackground} source={cardBackground}>
                                <ScratchView handlers={handlers} style={{flex: 1}}>
                                    <View style={{flex: 1}}>
                                        <Expo.GLView
                                            style={{flex: 1}}
                                            onContextCreate={async context => {
                                                app(context, {
                                                    image,
                                                    cover,
                                                    handlers,
                                                    status: (status) => {
                                                        statuses[index] = status;
                                                        checkStatus();
                                                    }
                                                });
                                            }}
                                        />
                                    </View>
                                </ScratchView>
                            </ImageBackground>
                        )
                    })
                }
                <StarterComponent/>
                <HowToPlayComponent/>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    containerScratch: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: '1%',
        flexWrap: 'wrap'
    },
    backgroundText: {
        width: '97%',
        marginTop: '5%',
        marginBottom: '4%',
        borderRadius: 15,
        height: '15%',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardBackground: {
        width: '29%',
        height: '29%',
        margin: '2%',
        marginBottom: '4%',
        borderRadius: 15,
        overflow: 'hidden',
    },
    text: {
        display: 'flex',
        fontFamily: 'scratcher-font',
        fontSize: 18,
        color: 'red'
    }
});
