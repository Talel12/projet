import React, { Component } from 'react';
// import { Map, TileLayer, Marker, Popup  } from 'react-leaflet';
// import L from 'leaflet';
// import {BingMap, BingPushpin} from "react-rx-bing-map";
import { ReactBingmaps } from 'react-bingmaps';
import '../components/map.css'
// import MarkerClusterGroup from 'react-leaflet-markercluster';
// import 'react-leaflet-markercluster/dist/styles.min.css';

// var markers = L.markerClusterGroup();


{/*var myIcon = L.icon({
    iconUrl: 'https://img.icons8.com/plasticine/2x/marker.png',
    iconSize: [38, 45],
    iconAnchor: [19, 40],
    popupAnchor: [0, -30]

})*/}




class MapAfficher extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tab: [{
                lat: 33.457103164901056,
                lng: 9.025008521737607,
            }, {
                lat: 33.457103164901056,
                lng: 9.025008521737607,
            }, {
                lat: 33.457153164901056,
                lng: 9.025003521737607,
            }, {
                lat: 33.457103164901056,
                lng: 9.025008521737607,
            }, {
                lat: 33.457103164901056,
                lng: 9.925008521737607,
            }, {
                lat: 33.657203164901056,
                lng: 9.125058521737607,
            }, {
                lat: 33.756103164901056,
                lng: 9.335008521737607,
            }],

            zoom: 7
        }
    }


    render() {
        const positions = this.state.tab
        // [this.state.lat, this.state.lng]



        return (
            <div className="map">
                <ReactBingmaps
                    bingmapKey="ApRNBJloRVYTAKCIFVWKgDGr-ZIwJbs74dMXgLPYpBqRjYiwlveI02U8ulNuSEYY"
                    navigationBarMode={"minified"}
                    supportedMapTypes={["road", "canvasDark"]}
                    zoom={this.state.zoom}
                    disableStreetside={true}
                    

                >
                 
                    </ReactBingmaps>

                <div className="aside"><h1>Find Some House</h1></div>

            </div>
        )
    };
}

export default MapAfficher;





{/* <Map className="map " center={positions[0]} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
            minZoom="5" 
            maxZoom="25"
          />
          {positions.map(el =>
            <Marker position={[el.lat , el.lng]} icon={myIcon}>
            <Popup>
               
          </Popup>
          </Marker>
          )}
          
          </Map> */}