import React, { Component } from 'react';
import './map.css';
import { Map, TileLayer, Marker, Popup , GroupComponent , FeatureGroup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'

// import 'leaflet.markercluster';
// var markers = L.markerClusterGroup();


var maisonIcon = L.icon({
  iconUrl: 'https://img.icons8.com/plasticine/2x/marker.png',
  iconSize: [38, 45],
  iconAnchor: [19, 40],
  popupAnchor: [0, -30]

})
var terrainIcon = L.icon({
    iconUrl: 'https://cdn1.iconfinder.com/data/icons/ecommerce-61/48/eccomerce_-_location-128.png',
    iconSize: [38, 45],
    iconAnchor: [19, 40],
    popupAnchor: [0, -30]
  
  })
  var defaultIcon = L.icon({
    iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-128.png',
    iconSize: [38, 45],
    iconAnchor: [19, 40],
    popupAnchor: [0, -30]

  })



class MapAfficher extends Component {

  state = {
    tab:[{
      lat: 33.457103164901056,
      lng: 9.025008521737607,
      categorie:"maison"
    }, {
      lat: 35.457103164901056,
      lng: 10.025008521737607,
      categorie:"terrain"
    }, {
      lat: 33.457153164901056,
      lng: 9.025003521737607,
      categorie:"maison"
    }, {
      lat: 33.457103164901056,
      lng: 9.025008521737607,
      categorie:"maison"
    }, {
      lat: 33.457103164901056,
      lng: 9.925008521737607,
      categorie:"terrain"
    }, {
      lat: 33.657203164901056,
      lng: 9.125058521737607,
    }, {
      lat: 33.756103164901056,
      lng: 9.335008521737607,
      categorie:"maison"
    }],

    zoom: 7,
  }


  render() {
    const positions = this.state.tab
    // [this.state.lat, this.state.lng]


const iconSwitch = (cat) =>{
        switch(cat){
            case 'maison':return maisonIcon;
            case 'terrain':return terrainIcon;
            default :return defaultIcon

        }
    }


    return (
      <div className="map">
        <Map className="map " center={positions[0]} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
            minZoom="5" 
            maxZoom="25"
          />
          {/* <MarkerCluster> */}
          {positions.map(el =>
            <Marker position={[el.lat , el.lng]} icon={iconSwitch(el.categorie)}>
            <Popup>
             <h5>{el.categorie?el.categorie:"Undefined"}</h5>
          </Popup>
          </Marker>
          )}
          {/* </MarkerCluster> */}
          
        </Map>
        <div className="aside"><h1>Find Some House</h1></div>
       
      </div>
    )
  };
}

export default MapAfficher;
