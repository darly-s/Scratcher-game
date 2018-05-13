import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';

import { changeStarterVisibility } from './StarterComponent';

import backgroundImage from '../../../assets/images/magic_forest_frame3.png';
import buttonImage from '../../../assets/images/magic_forest_button.png';
import coinImage from '../../../assets/images/magic_forest_coin_icon_small.png';
import giftImage from '../../../assets/images/magic_forest_gift_icon.png';
import questionImage from '../../../assets/images/magic_forest_question_icon.png';

/**
 * Change starterComponent visibility status from outside
 */

export function changeInfoVisibility() {
}

/**
 * @class howToPlayComponent - Represents a message box that becomes visible when the user press 'How to play' text on starterComponent
 */


export default class howToPlayComponent extends Component {
    state = {
        isVisible: false,
    };

    componentDidMount() {
        changeInfoVisibility = () => {
            this.setState({isVisible: true})
        };
    }

    render() {
        return (
            <View style={(this.state.isVisible) ? styles.componentContainer : styles.hideContainer}>
                <ImageBackground style={(this.state.isVisible) ? styles.backgroundImage : styles.hideContainer}
                                 source={backgroundImage}>
                    <TouchableWithoutFeedback onPress={() => {
                        changeStarterVisibility();
                        this.setState({isVisible: false});
                    }}>
                        <Image style={(this.state.isVisible) ? styles.questionIcon : styles.hideContainer}
                               source={questionImage}/>
                    </TouchableWithoutFeedback>
                    <Text style={styles.topText}>60 <Image style={styles.icon} source={coinImage}/> to play</Text>
                    <TouchableOpacity onPress={() => this.setState({isVisible: false})}>
                        <ImageBackground style={(this.state.isVisible) ? styles.button : styles.hideContainer}
                                         source={buttonImage}>
                            <Text style={styles.buttonText}>Make a Deposit, Earn Coins</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <Text style={styles.bottomText}> <Image
                        style={(this.state.isVisible) ? styles.icon : styles.hideContainer} source={giftImage}/> Share &
                        Get 1000 <Image style={styles.icon} source={coinImage}/></Text>
                </ImageBackground>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
        bottom: 0,
        justifyContent: 'center'
    },
    componentContainer: {
        width: '100%',
        height: '50%',
        flex: 1,
        position: 'absolute'
    },
    hideContainer: {
        height: 0,
        width: 0
    },
    button: {
        display: 'flex',
        height: '55%',
        top: '30%',
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        width: '100%',
        fontFamily: 'scratcher-font',
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    },
    topText: {
        display: 'flex',
        width: '100%',
        fontFamily: 'scratcher-font',
        textAlign: 'center',
        top: '10%',
        fontSize: 26,
        color: 'orange'
    },
    bottomText: {
        display: 'flex',
        width: '100%',
        fontFamily: 'scratcher-font',
        textAlign: 'center',
        fontSize: 26,
        bottom: '15%',
        color: 'orange'
    },
    icon: {
        height: 20,
        width: 20
    },
    questionIcon: {
        height: 26,
        width: 26,
        top: '20%',
        left: '88%'
    }
});
