import React, { Component } from 'react';
import { PanResponder, View } from 'react-native';
import { PropTypes } from 'prop-types';

/**
 * @class ScratchView - Represents the listener for pan events
 */

class ScratchView extends Component {

    static defaultProps = {
        onTouchesBegan: () => {},
        onTouchesMoved: () => {},
        onTouchesEnded: () => {},
        onStartShouldSetPanResponderCapture: () => true,
    };

    buildGestures = () =>
        PanResponder.create({
            onResponderTerminationRequest: this.props.onResponderTerminationRequest,
            onStartShouldSetPanResponderCapture: this.props.onStartShouldSetPanResponderCapture,
            onPanResponderGrant: ({ nativeEvent }, gestureState) => {
                const event = this._transformEvent({ ...nativeEvent, gestureState });
                this.props.handlers.pointerDown(event);
                this.props.onTouchesBegan(event);
            },
            onPanResponderMove: ({ nativeEvent }, gestureState) => {
                const event = this._transformEvent({ ...nativeEvent, gestureState });
                this.props.handlers.pointerMove(event);
                this.props.onTouchesMoved(event);
            },
            onPanResponderRelease: ({ nativeEvent }, gestureState) => {
                const event = this._transformEvent({ ...nativeEvent, gestureState });
                this.props.handlers.pointerUp(event);
                this.props.onTouchesEnded(event);
            }
        });

    componentWillMount() {
        this._panResponder = this.buildGestures();
    }

    _transformEvent = event => {
        event.preventDefault = event.preventDefault || (_ => {});
        event.stopPropagation = event.stopPropagation || (_ => {});
        return {x: event.locationX, y: event.locationY};
    };

    render() {
        return <View {...this.props} {...this._panResponder.panHandlers} />;
    }
}
export default ScratchView;
