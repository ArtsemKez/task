import React from "react";
import L from "leaflet";
import {createControlComponent} from "@react-leaflet/core";
import "leaflet-routing-machine";
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'

export const Routing = ({waypoints}) => {

    const createRoutineMachineLayer = ({waypoints}) => {

        const instance = L.Routing.control({
            waypoints,
            lineOptions: {
                styles: [{color: "#88ff06", weight: 4}]
            },
            show: false,
            addWaypoints: false,
            routeWhileDragging: true,
            draggableWaypoints: true,
            fitSelectedRoutes: true,
            showAlternatives: false
        });
        return instance;
    };

    const RoutingMachine = createControlComponent(createRoutineMachineLayer);

    return(
        <div>
            <RoutingMachine waypoints={waypoints}/>
        </div>
    )
}
