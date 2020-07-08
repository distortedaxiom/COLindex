import React, {useState} from "react";
import ReactMapGL from "react-map-gl";

import Header from '../../components/Header/Header'

export default function Dashboard(props) {

    const MAPBOX_TOKEN = "pk.eyJ1IjoiZGlzdG9ydGVkYXhpb20iLCJhIjoiY2tjYjgzeTBkMXFjYzJ6cWVneWU4MGtzOCJ9.8TDKLf0BqMqd8kK38G-R0w"


    const [viewport, setViewPort] = useState({
        latitude: 39.8097343,
        longitude: -98.5556199,
        width: "100vw",
        height: "92.5vh",
        zoom: 3
    });

    return (
        <div>
            <Header />
            <div>
                <ReactMapGL
                    {...viewport}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                    onViewportChange={viewport => {
                        setViewPort(viewport)
                    }}>
                </ReactMapGL>
            </div>
        </div>
    )

}
