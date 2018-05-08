import React from 'react';
import { View, Dimensions, StyleSheet, PixelRatio, TouchableWithoutFeedback } from 'react-native';
import Canvas from 'react-native-canvas';

const scratchComponent = (props) => (
    <TouchableWithoutFeedback>
        <View onLayout={(event) => console.log(event)}style={styles.containerScratch}>
            <Canvas ref={handleCanvas}/>
        </View>
    </TouchableWithoutFeedback>
);

const {height} = Dimensions.get('window');
const ratio = height / 8;
const handleCanvas = (canvas) => {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'purple';
    ctx.fillRect(0, 0, ratio, ratio);
};

const styles = StyleSheet.create({
    containerScratch: {
        width: ratio,
        height: ratio,
        top: '47%',
        right: '3%',
        alignSelf: 'center',
        borderWidth: 2
    }
});

export default scratchComponent;
