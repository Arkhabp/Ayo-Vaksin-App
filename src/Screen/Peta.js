import React from "react";
import {Vie, View} from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const Peta = ({route})=> {
    const {Lat, Long} = route.params;
    return(
        <View>
            <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={{width: '100%',  height: "100%", marginTop: 10, alignSelf:'center', position: 'relative'}}
                    region={{
                        latitude: Lat,
                        longitude: Long,
                        latitudeDelta: 0.002,
                        longitudeDelta: 0.001,
                    }}
                    >
            </MapView>
        </View>
    )
}

export default Peta;