import React from "react";
import style from "./TableItem.module.css"
import {Button, Select} from 'antd';
import {useDispatch} from "react-redux";
import {actions} from "../../../../../redux/trackerReducer";
import {CloseOutlined} from "@ant-design/icons";


export const TableItem = ({route}) => {

    const dispatch = useDispatch()
    const {Option} = Select;

    const onChangeFrom = (value) => {
        dispatch(actions.selectRouteFrom(route.id, value))
        clickingOnARoute()
    }

    const onChangeTo = (value) => {
        dispatch(actions.selectRouteTo(route.id, value))
        clickingOnARoute()
    }

    const onDeleteRoute = () => {
        dispatch(actions.deleteRoute(route.id))
    }

    const clickingOnARoute = () => {
        dispatch(actions.setCoordinatesForFrom(route.from))
        dispatch(actions.setCoordinatesForTo(route.to))
    }

    return (
        <div onClick={clickingOnARoute} className={style.TableItem}>
            <div className={style.from}>
                Откуда: {' '}
                <Select
                    defaultValue={route.from}
                    size={"small"}
                    showSearch
                    placeholder="Город отправления"
                    optionFilterProp="children"
                    onChange={onChangeFrom}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="Minsk">Минск</Option>
                    <Option value="Moscow">Москва</Option>
                    <Option value="Saint Petersburg">Санкт-Петербург</Option>
                    <Option value="Vilnius">Вильнюс</Option>
                    <Option value="Warsaw">Варшава</Option>
                </Select>
            </div>
            <div className={style.to}>
                Куда: {' '}
                <Select
                    defaultValue={route.to}
                    size={"small"}
                    showSearch
                    placeholder="Город прибытия"
                    optionFilterProp="children"
                    onChange={onChangeTo}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="Minsk">Минск</Option>
                    <Option value="Moscow">Москва</Option>
                    <Option value="Saint Petersburg">Санкт-Петербург</Option>
                    <Option value="Vilnius">Вильнюс</Option>
                    <Option value="Warsaw">Варшава</Option>
                </Select>
            </div>
            <Button className={style.delete} onClick={onDeleteRoute} type={'primary'} danger>
                <CloseOutlined/>
            </Button>
        </div>
    )
}
