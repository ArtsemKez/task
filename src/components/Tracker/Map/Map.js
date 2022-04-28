import React from "react";
import style from "./Map.module.css"
// import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import {MapContainer, TileLayer} from "react-leaflet";
import RoutineMachine from './RoutingMachine'


export const Map = () => {

    const points = [
        [33.52001088075479, 36.26829385757446],
        [33.50546582848033, 36.29547681726967]
    ];

    return (
        <div id={'MapBody'} className={style.Map}>
            <MapContainer
                zoom={10}
                style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0}}
            >
                <TileLayer
                    url='https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=1nR657gC03jDAH5EzzVp'
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                />

                <RoutineMachine waypoints={points}/>
            </MapContainer>
        </div>
    )
}
