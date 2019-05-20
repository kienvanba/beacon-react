import BKBeacon from '../BKBeacon.js';


const BKBeaconTest = {
    nearestBeacon: function(beacons = []) {
        console.log("testing BKBeacon.nearestBeacon");
        console.log("with parameters", beacons);
        console.log("expected result: return the closest beacon (beacon that has minimum distance)");
        let result = BKBeacon.nearestBeacon(beacons);
        console.log("result", result);
    },
    parseBeacons: function(beaconsFromLibrary = []) {
        console.log("testing BKBeacon.parseBeacons");
        console.log("with parameters", beaconsFromLibrary);
        console.log("expected result: return an array of beacon (with {id: uuid+minor+major, rssi: rssi, distance: [arr distance]}");
        let result = BKBeacon.parseBeacons(beaconsFromLibrary);
        console.log("result", result);
    },
    updateBeacons: function(beacons = [], beaconsFromLibrary = []) {
        console.log("testing BKBeacon.updateBeacons");
        console.log("with parameters", [beacons, beaconsFromLibrary]);
        console.log("expected result: return an updated beacons arr, with different distance if exist and add new if none");
        let result = BKBeacon.updateBeacons(beacons, beaconsFromLibrary);
        console.log("result", result);
    },
}

export default BKBeaconTest;