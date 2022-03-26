import React from 'react';
import {Input as AInput} from "antd";

import {BACKGROUND_COLOR, BORDER_RADIUS} from "../../styleConsts";


const Input = ({label, name, rules, placeholder, prefix, password, onChange, ...props}) => {
    const Component = password ? AInput.Password : AInput;

    return (
        <Component
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
            onChange={onChange}
            {...props}
        />
    );
};

export default Input;