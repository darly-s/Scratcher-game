import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';

import backgroundText from '../../../assets/images/magic_forest_frame_for_text.png';
import cardBackground from '../../../assets/images/magic_forest_frame.png';

const cards = [1, 2, 3, 4, 5, 6];

const scratchListComponent = () => (
    <View style={styles.containerScratch}>
        <ImageBackground style={styles.backgroundText} source={backgroundText}>
            <Text style={styles.text}>MATCH THE WINNER AND WIN A PRIZE</Text>
        </ImageBackground>
        {
            cards.map(item => <ImageBackground key={item} style={styles.cardBackground}
                                               source={cardBackground}></ImageBackground>)
        }
    </View>
);

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

export default scratchListComponent;