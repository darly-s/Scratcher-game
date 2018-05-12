import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';

import { chooseCard, chooseWinner } from './Services/Cards.service.js';

import backgroundText from '../../../assets/images/magic_forest_frame_for_text.png';
import cardBackground from '../../../assets/images/magic_forest_frame.png';
import cover from '../../../assets/images/magic_forest_scratch_frame.png';

import Animations from './Animations';
import ScratchView from './Views/ScratchView';

const app = Animations.Card.default;
const statuses = [];
const globalParams = {isWin: null, winnerCard: null, isWinnerCompared: null};

const checkStatus = () => {
    const isAllCardsVisible = statuses.filter(el => el).length === 6;
    if (isAllCardsVisible) {
        (globalParams.isWin) ? Animations.Red.happyCard() : Animations.Red.disappointed();
    }
};

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
                            </ImageBackground>)
                    })
                }
            </View>
        )
    };
}

const styles = StyleSheet.create({
    containerScratch: {
        flex: 1,
        borderWidth: 2,
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    backgroundText: {
        width: '100%',
        marginTop: '5%',
        marginBottom: '4%',
        borderRadius: 15,
        height: '15%',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardBackground: {
        width: '30%',
        height: '30%',
        margin: '1%',
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
