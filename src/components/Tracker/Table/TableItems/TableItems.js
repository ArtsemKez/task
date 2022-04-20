import React from "react";
import styles from "./TableItems.module.css"
import {TableItem} from "./TableItem/TableItem";
import {Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getRoutesItems} from "../../../../redux/trackerSelectors";
import {actions} from "../../../../redux/trackerReducer";

export const TableItems = () => {

    const dispatch = useDispatch()
    const routesItems = useSelector(getRoutesItems)

    const addRote = () => {
        dispatch(actions.addRoute())
    }

    return(
        <div className={styles.TableItemsBody}>
            {routesItems.map((route) => (
                <TableItem route={route} key={route.id} />
            ))}
            <Button onClick={addRote} className={styles.buttonAdd} block>Добавить маршрут</Button>
        </div>
    )
}
