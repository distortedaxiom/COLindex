import React, {useState} from "react";
import { Map, Marker, TileLayer } from 'react-leaflet'
import {createRef} from 'react'

import Header from '../../components/Header/Header'

export default function Dashboard(props) {

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
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            </div>
        </div>
    )

}
