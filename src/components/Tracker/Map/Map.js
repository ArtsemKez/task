import React from "react";
import style from "./Map.module.css"
import {MapContainer, TileLayer} from "react-leaflet";
import {Routing} from './RoutingMachine'
import {useSelector} from "react-redux";
import {getPoints} from "../../../redux/trackerSelectors";


export const Map = () => {

    const points = useSelector(getPoints)

    return (
        <div id={'MapBody'} className={style.Map}>
            <MapContainer
                center={[55.751849391735284, 37.60620117187501]}
                zoom={5}
                style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0}}
            >
                <TileLayer
                    url='https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=1nR657gC03jDAH5EzzVp'
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                />
                <Routing waypoints={points}/>
            </MapContainer>
        </div>
    )
}
