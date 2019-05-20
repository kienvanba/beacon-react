import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import BKButton from "../components/BKButton";
import BKInput from '../components/BKInput';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            pwd: "",
            isShowPwd: false,
        }
    }

    static navigationOptions = {
        title: 'LoginScreen'
    };

    handleIdChanged = (text) => {
        this.setState({ id: text });
    };

    handlePwdChanged = (text) => {
        this.setState({ pwd: text });
    };

    handleLogin = () => {
        console.log(`login with [${this.state.id}, ${this.state.pwd}]`);
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                <View style={styles.form}>
                    <BKInput
                        value={this.state.id}
                        onChangeText={this.handleIdChanged}
                        placeHolder="user name"
                    />
                    <BKInput
                        value={this.state.pwd}
                        onChangeText={this.handlePwdChanged}
                        placeHolder="password"
                    />
                    <BKButton text="Login" onPress={this.handleLogin} />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    form: {
        flex: 1,
        maxHeight: 150,
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: '80%',
    },
})

export default LoginScreen;