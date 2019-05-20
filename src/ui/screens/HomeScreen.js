import React from 'react';
import { View, StyleSheet } from 'react-native';
import BKButton from '../components/BKButton';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'HomeScreen'
    };

    navigateToLoginScreen = () => {
        this.props.navigation.navigate('Login');
        console.log("navigate");
    };

    navigateToBeaconScreen = () => {
        this.props.navigation.navigate('Beacon');
    }

    render() {
        return(
            <View style = {styles.container} >
                <BKButton text = "Login screen" onPress = { this.navigateToLoginScreen } />
                <BKButton text = "Beacon demo screen" onPress = { this.navigateToBeaconScreen } />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default HomeScreen;