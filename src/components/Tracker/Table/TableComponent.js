import React, {useEffect} from "react";
import style from "./TableComponent.module.css"
import {TableItems} from "./TableItems/TableItems";

export const TableComponent = () => {

    const resized = () => {

        let mousePosition;
        const resizedLine = document.getElementById("resize");
        const tableArea = document.getElementById("tableBody")
        const mapArea = document.getElementById("MapBody")
        const trackerArea = document.getElementById('TrackerBody')

        const resize = (event) => {
            mousePosition = event.screenX
            tableArea.style.width = (parseInt(mousePosition) - 45 + 7 + 'px')
            mapArea.style.width = (parseInt(getComputedStyle(trackerArea, '').width) -
                parseInt(getComputedStyle(tableArea, '').width) - 15) + 'px'
        }

        resizedLine.addEventListener("mousedown", () => {
            document.addEventListener("mousemove", resize, false);
        }, false);

        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", resize, false);
        }, false);
    }

    useEffect(() => {
        resized()
    }, [])

    return (
        <>
            <div id={'tableBody'} className={style.Table}>
                <div className={style.tableItems}>
                    <TableItems/>
                </div>
                <div id={'resize'} className={style.resize}> </div>
            </div>
        </>
    )
}
