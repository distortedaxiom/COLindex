import React, {useState} from "react";
import { Map, Marker, TileLayer, GeoJSON, Popup } from 'react-leaflet'
import ReactDOMServer from 'react-dom/server';
import 'leaflet/dist/leaflet.css';
import '../../../css/App.css'
import statejson from "../../../assets/geojson/states_outline.json";
import countyjson from "../../../assets/geojson/counties_outline.json";

export default function MapView(props) {

    const [viewport, setViewPort] = useState({
        lat: 39.81,
        lng: -98.56,
        zoom: 5
    });

    const [zoomLevel, setZoomLevel] = useState()

    const eachFeature = (feature = {}, layer) => {
        const { properties = {}} = feature
        const { NAME, STATE } = properties
        layer.bindPopup(`<p>${NAME}, ${STATE}</p>`)
    }

    const getRandomColor = (stateNumber) => {

        if ((stateNumber) === "09") {
            return "#3BAE1C"
        }

        if ((stateNumber) === "05") {
            return "#F1182B"
        }

        if ((stateNumber % 47) === 0) {
            return "#DAF119"
        }

        if ((stateNumber % 53) === 0) {
            return "#DAF119"
        }
        if ((stateNumber % 40) === 0) {
            return "#1CAEA9"
        }
        if ((stateNumber % 25) === 0) {
            return "#4F53BB"
        }
        if ((stateNumber % 24) === 0) {
            return "#68D365"
        }
        if ((stateNumber % 23) === 0) {
            return "#EF655A"
        }
        if ((stateNumber % 22) === 0) {
            return "#B669F0"
        }
        if ((stateNumber % 21) === 0) {
            return "#69E6F0"
        }
        if ((stateNumber % 19) === 0) {
            return "#E0F069"
        }
        if ((stateNumber % 18) === 0) {
            return "#E546F5"
        }
        if ((stateNumber % 16) === 0) {
            return "#46D8F5"
        }
        if ((stateNumber % 15) === 0) {
            return "#B7BF58"
        }
        if ((stateNumber % 14) === 0) {
            return "#58BF7F"
        }
        if ((stateNumber % 13) === 0) {
            return "#BF5864"
        }
        if ((stateNumber % 12) === 0) {
            return "#4F53BB"
        }
        if ((stateNumber % 11) === 0) {
            return "#68D365"
        }
        if ((stateNumber % 10) === 0) {
            return "#EF655A"
        }
        if ((stateNumber % 9) === 0) {
            return "#B669F0"
        }
        if ((stateNumber % 8) === 0) {
            return "#69E6F0"
        }
        if ((stateNumber % 7) === 0) {
            return "#E0F069"
        }
        if ((stateNumber % 6) === 0) {
            return "#6148DE"
        }
        if ((stateNumber % 5) === 0) {
            return "#98CC8A"
        }
        if ((stateNumber % 5) === 0) {
            return "#8AA9CC"
        }
        if ((stateNumber % 5) === 0) {
            return "#E7EA45"
        }
        if ((stateNumber % 4) === 0) {
            return "#45EA63"
        }
        if ((stateNumber % 3) === 0) {
            return "#454AEA"
        }
        if ((stateNumber % 2) === 0) {
            return "#454AEA"
        }
        if ((stateNumber % 2) === 0) {
            return "#F18A15"
        }
        if ((stateNumber % 41) === 0) {
            return "#F18A15"
        }
        if ((stateNumber % 53) === 0) {
            return "#F18A15"
        }
        if ((stateNumber % 29) === 0) {
            return "#F18A15"
        }
        if ((stateNumber % 37) === 0) {
            return "#F18A15"
        }

        if ((stateNumber % 1) === 0) {
            return "#7E18F1"
        }

    }

    return (
            <div className="leaflet-container">
                <Map center={[viewport.lat, viewport.lng]} zoom={viewport.zoom} style={{height : '100vh'}} onZoom={(e) => { setZoomLevel(e.target._zoom)}}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <GeoJSON data={statejson} onEachFeature={eachFeature} style={(feature) => {
                        return {
                            color: getRandomColor(feature.properties.STATE),
                            weight: 1.5,
                            opacity: 0.5
                        }
                    }}/>
                    {zoomLevel >= 7 ?  <GeoJSON data={countyjson} onEachFeature={eachFeature} style={(feature) => {
                        return {
                            color: "#000000",
                            weight: 0.5,
                            opacity: 0.8
                        }
                    }}/> : <div></div>}
                </Map>
            </div>
    )

}
