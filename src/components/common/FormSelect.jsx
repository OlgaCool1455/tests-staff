import React from 'react';
import {Select, Form} from "antd";

import s from "./select.module.css";
import {BACKGROUND_COLOR, BORDER_RADIUS} from "../../styleConsts";

const {Option} = Select;

const FormSelect = ({name, rules, options, placeholder, ...props}) => {
    return (
        <Form.Item name={name} rules={rules}>
            <Select
                dropdownClassName={s.antSelectSelection}
                className={s.antSelectSelection}
                dropdownStyle={{
                    borderRadius: BORDER_RADIUS,
                    background: BACKGROUND_COLOR,
                    border: "none",
                    outline: "none",
                    boxShadow: `0 0 0 9999px ${BACKGROUND_COLOR} inset`,
                }}
                placeholder={placeholder}
                {...props}
            >
                {options.map(o => <Option key={o.value} value={o.value}>
                    {o.label}
                </Option>)}
            </Select>
        </Form.Item>
    );
};

export default FormSelect;