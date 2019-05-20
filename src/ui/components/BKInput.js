import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet } from 'react-native';

class BKInput extends React.Component {
    render() {
        const { value, placeHolder, onChangeText } = this.props;
        return (
            <View style={styles.container} >
                <TextInput
                    style={styles.input}
                    value={value}
                    placeholder={placeHolder}
                    onChangeText={onChangeText}
                />
            </View>
        );
    }
}

BKInput.propTypes = {
    value: PropTypes.string,
    placeHolder: PropTypes.string,
    onChangeText: PropTypes.func,
}

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        backgroundColor: 'grey',
        borderRadius: 5,
    },
    input: {
        flex: 1,
    }
});

export default BKInput;