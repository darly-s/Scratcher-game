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

import { changeInfoVisibility } from './HowToPlayComponent';

import backgroundImage from '../../../assets/images/magic_forest_frame2.png';
import buttonImage from '../../../assets/images/magic_forest_button.png';
import coinImage from '../../../assets/images/magic_forest_coin_icon_small.png';
import questionImage from '../../../assets/images/magic_forest_question_icon.png';

/**
 * Change starterComponent visibility status from outside
 */

export function changeStarterVisibility() {
}

/**
 * @class starterComponent - Represents a message box that becomes visible when the user start the game
 */

export default class starterComponent extends Component {
    state = {
        isVisible: true,
    };

    componentDidMount() {
        changeStarterVisibility = () => {
            this.setState({isVisible: true})
        };
    }

    render() {
        return (
            <View style={(this.state.isVisible) ? styles.componentContainer : styles.hideContainer}>
                <ImageBackground style={(this.state.isVisible) ? styles.backgroundImage : styles.hideContainer}
                                 source={backgroundImage}>
                    <TouchableWithoutFeedback onPress={() => {
                        changeInfoVisibility();
                        this.setState({isVisible: false})
                    }}>
                        <View style={{alignSelf: 'center'}}><Text style={styles.topText}><Image
                            style={styles.icon} source={questionImage}/> How to play</Text></View>
                    </TouchableWithoutFeedback>
                    <TouchableOpacity onPress={() => this.setState({isVisible: false})}>
                        <ImageBackground style={(this.state.isVisible) ? styles.button : styles.hideContainer}
                                         source={buttonImage}>
                            <Text style={styles.buttonText}>Play for 60 <Image
                                style={(this.state.isVisible) ? styles.icon : styles.hideContainer} source={coinImage}/></Text>
                        </ImageBackground>
                    </TouchableOpacity>
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
        height: '40%',
        flex: 1,
        position: 'absolute'
    },
    hideContainer: {
        height: 0,
        width: 0
    },
    button: {
        display: 'flex',
        height: '60%',
        top: '33%',
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
        fontSize: 22,
        color: 'orange'
    },
    icon: {
        height: 20,
        width: 20
    }
});