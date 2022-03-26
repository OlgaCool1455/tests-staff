import React from 'react';
import {Form} from "antd";

import Input from "./Input";

const FormInput = ({label, name, initialValue, rules, field, ...props}) => {
    return (
        <Form.Item label={label} name={name} rules={rules} {...field}>
            <Input {...props}/>
        </Form.Item>
    );
};

export default FormInput;