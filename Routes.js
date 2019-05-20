import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from './src/ui/screens/HomeScreen'
import LoginScreen from './src/ui/screens/LoginScreen'
import BeaconDemoScreen from './src/ui/screens/BeaconDemoScreen'

const Project = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Login: {
        screen: LoginScreen
    },
    Beacon: {
        screen: BeaconDemoScreen
    }
});

export default createAppContainer(Project);