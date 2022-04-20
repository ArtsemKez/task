import React from "react";
import styles from "./TableItems.module.css"
import {TableItem} from "./TableItem/TableItem";
import {Button} from "antd";
import {useSelector} from "react-redux";
import {getRoutesItems} from "../../../../redux/trackerSelectors";

export const TableItems = () => {

    const routesItems = useSelector(getRoutesItems)

    return(
        <div className={styles.TableItemsBody}>
            {routesItems.map((route) => (
                <TableItem route={route} key={route.id} />
            ))}
            <Button className={styles.buttonAdd} block>Добавить маршрут</Button>
        </div>
    )
}
