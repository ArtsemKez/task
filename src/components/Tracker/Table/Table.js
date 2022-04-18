import React, {useEffect} from "react";
import style from "./Table.module.css"

export const Table = () => {

    const resized = () => {

        let mousePosition;
        const resizedLine = document.getElementById("resize");
        const tableArea = document.getElementById("tableBody")
        const mapArea = document.getElementById("MapBody")
        const trackerArea = document.getElementById('TrackerBody')

        const resize = (event) => {

            let shift = mousePosition - event.screenX
            mousePosition = event.screenX

            tableArea.style.width = (parseInt(mousePosition) - 30 + 'px')
            mapArea.style.width = (parseInt(getComputedStyle(trackerArea, '').width) -
                parseInt(getComputedStyle(tableArea, '').width)) + 'px'

            console.log('table width:', tableArea.style.width)
            console.log('shift:', shift)
            console.log('mousePosition:', mousePosition)
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
            Table
                <div id={'resize'} className={style.resize}> </div>
        </div>

           </>
    )
}
