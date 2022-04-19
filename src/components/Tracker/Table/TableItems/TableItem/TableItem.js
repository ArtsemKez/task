import React from "react";
import style from "./TableItem.module.css"
import {Select} from 'antd';


export const TableItem = () => {

    const {Option} = Select;

    function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onSearch(val) {
        console.log('search:', val);
    }

    return (
        <div className={style.TableItem}>
            <div className={style.from}>
                Откуда: {' '}
                <Select
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
                    <Option value="Минск">Минск</Option>
                    <Option value="Москва">Москва</Option>
                    <Option value="Санкт-Петербург">Санкт-Петербург</Option>
                    <Option value="Вильнюс">Вильнюс</Option>
                    <Option value="Варшава">Варшава</Option>
                </Select>
            </div>
            <div className={style.to}>
                Куда: {' '}
                <Select
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
                    <Option value="Минск">Минск</Option>
                    <Option value="Москва">Москва</Option>
                    <Option value="Санкт-Петербург">Санкт-Петербург</Option>
                    <Option value="Вильнюс">Вильнюс</Option>
                    <Option value="Варшава">Варшава</Option>
                </Select>
            </div>
        </div>
    )
}
