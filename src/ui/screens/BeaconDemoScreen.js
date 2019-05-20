import React from 'react';
import { View, FlatList, Text, StyleSheet, DeviceEventEmitter } from 'react-native';
import BKButton from '../components/BKButton';
import trilaterate from '../../Trilateration.js';
import BKBeacon from '../../BKBeacon.js'

import Beacons from 'react-native-beacons-manager';
// import trilateration from 'trilateration';
import Canvas from 'react-native-canvas';

import Svg, {Circle, Rect} from 'react-native-svg';
// import BluetoothState from 'react-native-bluetooth-state';

const nullArray = [];
const beacon1 = '77d5a2a9-d539-4634-85ef-67b5a8c03690-64001-4660';
const beacon2 = '77d5a2a9-d539-4634-85ef-67b5a8c03690-64002-4660';
const beacon3 = '77d5a2a9-d539-4634-85ef-67b5a8c03690-64003-4660';
const beacon4 = '77d5a2a9-d539-4634-85ef-67b5a8c03690-64004-4660';

class BeaconDemoScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bluetoothState: '',
            identifier: 'kien', 
            uuid: '77d5a2a9-d539-4634-85ef-67b5a8c03690',
            beacons: nullArray,
            posx: 130,
            posy: 110,
            room: null,
        };
    }

    static navigationOptions = {
        title: 'BeaconDemoScreen'
    };

    componentWillMount() {
        console.log("will mount");
        // trilateration.addBeacon(0, trilateration.vector(0,0));
        // trilateration.addDistance(0, 1);
        
        Beacons.detectIBeacons();
        const region = {
            identifier: this.state.identifier,
            uuid: this.state.uuid,
        };

        Beacons.startRangingBeaconsInRegion('REGION1');
    }

    componentDidMount() {
        console.log("did mount");

        this.beaconsDidRange = DeviceEventEmitter.addListener(
            'beaconsDidRange', 
            (data) => {
                this.setState({ beacons: BKBeacon.parseBeacons(data.beacons) });
                console.log("did receive ", this.state.beacons);
                this.updateLocation();
            }
        );

        // BluetoothState.subscribe(
        //     bluetoothState => {
        //         this.setState({ bluetoothState: bluetoothState});
        //     }
        // );
        // BluetoothState.initialize();
    }

    componentWillUnmount() {
        this.beaconsDidRange = null;
    }

    handleCanvas = (canvas) => {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'purple';
        ctx.fillRect(0, 0, 100, 100);
    }

    updateBeacons = (newBeacons) => {
        if (this.state.beacons == nullArray) {
            if (newBeacons.length != 0) {
                newBeacons.map((beacon) => {
                    this.state.beacons.push({
                        id: beacon.uuid + '-' + beacon.minor + '-' + beacon.major,
                        rssi: beacon.rssi,
                        distance: [beacon.distance]
                    });
                })
            }
        }
    }

    updateLocation = () => {
        // var nBeacon = BKBeacon.nearestBeacon(this.state.beacons);
        // console.log("nearest beacon", nBeacon);
        // this.setState({
        //     room: nBeacon
        // });
    }

    moveObject = () => {
        var randx = Math.floor(Math.random() * 130) + 70;
        var randy = Math.floor(Math.random() * 120) + 1;
        
        var p1, p2, p3, p4;
			
        p1 = {x:60, y:0,  r:70, z:0}
        p2 = {x:200,  y:0, r:120, z:0};
        p3 = {x:70,  y:120, r:100, z:0};
        
        p4 = trilaterate(p1, p2, p3);

        console.log("coor: ", p4);

        this.setState({
            posx: Math.round(p4[0].x),
            posy: Math.round(p4[0].y),
        })
    }

    render() {
        return(

            <View style = {styles.container} >
                <Svg height='90%' width='100%' viewBox='0 0 200 200' style = {{backgroundColor: 'grey'}}>
                <Rect
                    x='60'
                    y='0'
                    width='140'
                    height='80'
                    stroke={this.state.room === beacon1 ? 'red' : 'cyan'}
                    strokeWidth='2'
                    fill='white'
                />
                <Rect
                    x='0'
                    y='80'
                    width='200'
                    height='40'
                    stroke={this.state.room === beacon2 ? 'red' : 'cyan'}
                    strokeWidth='2'
                    fill='white'
                />
                <Rect
                    x='0'
                    y='120'
                    width='70'
                    height='80'
                    stroke={this.state.room === beacon3 ? 'red' : 'cyan'}
                    strokeWidth='2'
                    fill='white'
                />
                <Rect
                    x='70'
                    y='120'
                    width='130'
                    height='80'
                    stroke={this.state.room === beacon4 ? 'red' : 'cyan'}
                    strokeWidth='2'
                    fill='white'
                />
                <Circle
                    cx='60'
                    cy='0'
                    r='5'
                    fill='green'
                />
                <Circle
                    cx='200'
                    cy='0'
                    r='5'
                    fill='green'
                />
                <Circle
                    cx='70'
                    cy='120'
                    r='5'
                    fill='green'
                />
                <Circle
                    cx='200'
                    cy='120'
                    r='5'
                    fill='green'
                />
                <Circle
                    cx='130'
                    cy='60'
                    r='5'
                    fill='green'
                />
                {/* <Circle
                    cx={this.state.posx}
                    cy={this.state.posy}
                    r='5'
                    fill='red'
                /> */}
                </Svg>
                <BKButton text = "update position" onPress = { this.moveObject } />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'cyan',
    },
    item: {
      flex: 1,
      backgroundColor: 'grey',
    },
});

export default BeaconDemoScreen;