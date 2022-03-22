import React from 'react';
import {Form, Input} from "antd";

import {BACKGROUND_COLOR, BORDER_RADIUS} from "../../styleConsts";

const FormInput = ({label, name, rules, placeholder, prefix, password, ...props}) => {
    const Component = password ? Input.Password : Input;

    return (
        <Form.Item label={label} name={name} rules={rules}>
            <Component
                // className={s.formInput}
                style={{
                    borderRadius: BORDER_RADIUS,
                    background: BACKGROUND_COLOR,
                    border: "none",
                    outline: "none",
                    boxShadow: `0 0 0 9999px ${BACKGROUND_COLOR} inset`,
                }}
                size={"large"}
                placeholder={placeholder}
                prefix={prefix}
                {...props}
            />
        </Form.Item>
    );
};

export default FormInput;