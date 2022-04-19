import React from "react";
import styles from "./TableItems.module.css"
import {TableItem} from "./TableItem/TableItem";
import {Button} from "antd";

export const TableItems = () => {
    return(
        <div className={styles.TableItemsBody}>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <Button style={{borderRadius:'5px', minWidth:'415px'}} block>Добавить маршрут</Button>
        </div>
    )
}
