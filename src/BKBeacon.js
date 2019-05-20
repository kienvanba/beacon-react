const BKBeacon = {
    nearestBeacon: function(beacons) {
        var beacon = null;
        for (let i=0; i<beacons.length; i++) {
            if (beacon == null) {
                beacon = beacons[i];
            } else {
                if (beacons[i].distance < beacon.distance) {
                    beacon = beacons[i];
                }
            }
        }
        var beaconId = null;
        if (beacon != null) {
            beaconId = (beacon.uuid + "-" + beacon.minor + "-" + beacon.major);
        }
        return beaconId;
    },
    parseBeacons: function(beaconsFromLibrary) {
        if (beaconsFromLibrary.length > 0) {
            const beacons = beaconsFromLibrary.map((beacon) => {
                return {
                    id: beacon.uuid + "-" + beacon.minor + "-" + beacon.major,
                    rssi: beacon.rssi,
                    distance: [beacon.distance]
                };
            });
            return beacons;
        }
        return [];
    },
    updateBeacons: function(beacons, beaconsFromLibrary) {
        beacons.map((b) => {
            var d = 0;
            beaconsFromLibrary.map((beacon) => {
                let id = beacon.uuid + "-" + beacon.minor + "-" + beacon.major;
                if (b.id === id
                    
                    ) {
                    d = beacon.distance;
                }
            });
            b.distance.push(d);
        });
        return beacons;
    },
}

export default BKBeacon;