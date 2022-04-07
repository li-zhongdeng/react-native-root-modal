import { StyleSheet, View, Animated } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

let styles = StyleSheet.create({
    defaultModalStyle: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }
});

class ModalContainer extends Component {
    static displayName = 'ModalContainer';

    static propTypes = {
        ...Animated.View.propTypes,
        visible: PropTypes.bool
    };

    static defaultProps = {
        visible: false
    };

    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.visible !== this.props.visible) {
            this.setState({
                visible: this.props.visible
            });
        }
    };

    render() {
        let {props} = this;
        return this.state.visible ? <View
            {...props}
            style={[styles.defaultModalStyle, props.style]}
        /> : null;
    }
}

export default ModalContainer;
export class AnimatedModalContainer extends ModalContainer {
    render() {
        let {props} = this;
        return this.state.visible ? <Animated.View
            {...props}
            style={[styles.defaultModalStyle, props.style]}
        /> : null;
    }
}
