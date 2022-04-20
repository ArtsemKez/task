import React from "react";
import style from "./Map.module.css"
import 'leaflet/dist/leaflet.css'
import {MapContainer, TileLayer} from "react-leaflet";

export const Map = () => {

    const center = [55.75, 37.6167]

      return (
        <div id={'MapBody'} className={style.Map}>
            <MapContainer
            center = {center}
            zoom = {10}
            style={{position:'absolute', left:0, top:0, right:0, bottom:0}}
            >
                <TileLayer
                url='https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=1nR657gC03jDAH5EzzVp'
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                />
            </MapContainer>
        </div>
    )
}
