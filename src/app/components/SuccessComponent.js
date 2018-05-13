import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Text, Image, TouchableWithoutFeedback } from 'react-native';

import winnerImage from '../../../assets/images/magic_forest_coin_icon_small.png';
import backgroundImage from '../../../assets/images/magic_forest_frame1.png';

export function setState() {
}

export default class successComponent extends Component {
    state = {
        isWin: false,
        isVisible: false,
        image: winnerImage,
        amount: 60
    };

    componentDidMount() {
        setState = (params) => {
            this.setState(params);
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => this.setState({isVisible: false})}>
                <View style={(this.state.isVisible) ? styles.componentContainer : styles.hideContainer}>
                    <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
                        <Text style={styles.mainText}>{(this.state.isWin) ? 'YOU WIN' : 'YOU LOOSE'}</Text>
                        {(this.state.isWin) ?
                            <Text style={styles.coinText}>{this.state.amount} <Image style={{height: 30, width: 26}}
                                                                                     source={this.state.image}/></Text> : null}
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
    },
    componentContainer: {
        width: '94%',
        height: '33%',
        marginLeft: '3%',
        display: 'flex',
        position: 'absolute',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        top: '20%',
        zIndex: 2
    },
    hideContainer: {
        height: 0,
        width: 0
    },
    mainText: {
        display: 'flex',
        width: '100%',
        fontFamily: 'scratcher-font',
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 26,
        color: 'red'
    },
    coinText: {
        display: 'flex',
        width: '100%',
        fontFamily: 'scratcher-font',
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 26,
        color: 'black'
    }
});
