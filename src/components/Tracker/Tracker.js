import React from "react";
import style from "./Tracker.module.css"
import {TableComponent} from "./Table/TableComponent";
import {Map} from "./Map/Map";

export const Tracker = () => {
    return(
        <div id={'TrackerBody'} className={style.Tracker}>
            <TableComponent/>
            <Map/>
        </div>
    )
}
