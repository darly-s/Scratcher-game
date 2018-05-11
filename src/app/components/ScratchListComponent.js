import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';

import backgroundText from '../../../assets/images/magic_forest_frame_for_text.png';
import cardBackground from '../../../assets/images/magic_forest_frame.png';

import bonfireImage from '../../../assets/images/scratch-image/magic_forest_bonfire.png';
import bowImage from '../../../assets/images/scratch-image/magic_forest_bow.png';
import leafImage from '../../../assets/images/scratch-image/magic_forest_leaf.png';
import ropeImage from '../../../assets/images/scratch-image/magic_forest_rope.png';
import tentImage from '../../../assets/images/scratch-image/magic_forest_tent.png';

const cards = [1, 2, 3, 4, 5, 6];
const chooseCard = (params) => {
    switch (params) {
        case 0:
            return bonfireImage;
        case 1:
            return bowImage;
        case 2:
            return leafImage;
        case 3:
            return ropeImage;
        case 4:
            return tentImage;
    }
};
const chooseWinner = (rate) => {
    if (rate <= (10 / 30)) {
        return bonfireImage;
    } else if (rate <= ((8 + 10) / 30)) {
        return bowImage;
    } else if (rate <= ((6 + 8 + 10) / 30)) {
        return leafImage;
    } else if (rate <= ((4 + 6 + 8 + 10) / 30)) {
        return ropeImage;
    } else {
        return tentImage;
    }
};
const cardsCombine = () => {
    const isWin = Math.random() >= 0.7;
    const images = [];
    const unTakeble = [];
    const shuffle = (maxImages) => {
        while (images.length < 6) {
            let isSufficient;
            let isUnTakeble;
            image = chooseCard(Math.round(Math.random() * 4));
            isUnTakeble = !!unTakeble.find(el => image === el);
            if (!isUnTakeble) {
                isSufficient = images.filter(el => image === el).length >= 2;
                ((!isSufficient) ? images : unTakeble).push(image);
            }
        }
        images.sort((a, b) => Math.random() - 0.5);
    };
    let image;
    if (!isWin) {
        shuffle();
    } else {
        const winnerCard = chooseWinner(Math.random());
        [1,1,1].map(() => images.push(winnerCard));
        shuffle();
    }
};


export default class scratchListComponent extends Component {
    componentDidMount() {
        cardsCombine();
    }

    render() {
        return (
            <View style={styles.containerScratch}>
                <ImageBackground style={styles.backgroundText} source={backgroundText}>
                    <Text style={styles.text}>MATCH THE WINNER AND WIN A PRIZE</Text>
                </ImageBackground>
                {
                    cards.map(item => <ImageBackground key={item} style={styles.cardBackground}
                                                       source={cardBackground}></ImageBackground>)
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
