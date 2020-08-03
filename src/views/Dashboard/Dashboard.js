import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"
import "mapbox-gl/dist/mapbox-gl.css"
import React, {useState} from "react";
import ReactMapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import {createRef} from 'react'

import Header from '../../components/Header/Header'

export default function Dashboard(props) {

    const MAPBOX_TOKEN = "pk.eyJ1IjoiZGlzdG9ydGVkYXhpb20iLCJhIjoiY2tjYjgzeTBkMXFjYzJ6cWVneWU4MGtzOCJ9.8TDKLf0BqMqd8kK38G-R0w"

    const [viewport, setViewPort] = useState({
        latitude: 39.8097343,
        longitude: -98.5556199,
        width: "100vw",
        height: "92.5vh",
        zoom: 4
    });

    const mapRef = React.useRef();

    return (
        <div>
            <Header />
            <div>
                <ReactMapGL
                    ref={mapRef}
                    {...viewport}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                    onViewportChange={viewport => {
                        setViewPort(viewport)
                    }}>
                <Geocoder mapRef={mapRef} mapboxApiAccessToken={MAPBOX_TOKEN} />
                </ReactMapGL>
            </div>
        </div>
    )

}
