import React from "react";
import style from "./TableItem.module.css"
import {Select} from 'antd';


export const TableItem = ({route}) => {

    const {Option} = Select;

    function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onSearch(val) {
        console.log('search:', val);
    }

    debugger

    return (
        <div className={style.TableItem}>
            <div className={style.from}>
                Откуда: {' '}
                <Select
                    defaultValue={route.from}
                    size={"small"}
                    showSearch
                    placeholder="Город отправления"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
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
                    onChange={onChange}
                    onSearch={onSearch}
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
        </div>
    )
}
