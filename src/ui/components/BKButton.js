import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class BKButton extends React.Component {
    render() {
        const {text, onPress} = this.props;
        return (
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.text}>
                    {text}
                </Text>
            </TouchableOpacity>
        );
    }
}

BKButton.propTypes = {
    text: PropTypes.string, 
    onPress: PropTypes.func,
};

const styles = StyleSheet.create({
    button: {
        height: '5%',
        width: '50%',
        minHeight: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3949ab',
        marginEnd: 5,
        marginStart: 5,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 5,
        alignSelf: 'center',
    },
    text: {
        textAlign: "center",
        color: 'grey',
    },
})

export default BKButton;