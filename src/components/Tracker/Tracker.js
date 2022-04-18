import React from "react";
import style from "./Tracker.module.css"
import {Table} from "./Table/Table";
import {Map} from "./Map/Map";

export const Tracker = () => {
    return(
        <div id={'TrackerBody'} className={style.Tracker}>
            <Table/>
            <Map/>
        </div>
    )
}
