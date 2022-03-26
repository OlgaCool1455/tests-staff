import React from 'react';
import {Radio, Space} from "antd";
import {MinusCircleOutlined} from "@ant-design/icons";

import FormInput from "../common/FormInput";

const RadioSolutionItem = ({field, remove}) => {
    return (
        <Radio key={field.name} value={field.name}>
            <Space style={{display: "flex", alignItems: "center"}}>
                <FormInput
                    field={field}
                    name={field.name}
                    placeholder={"enter text of solution"}
                    rules={[
                        {required: true, message: "please, enter text of solution"},
                        {type: "string", min: 32, message: "min length 32"},
                        {type: "string", max: 64, message: "max length 64"},
                    ]}
                />
                <MinusCircleOutlined onClick={() => remove(field.name)}/>
            </Space>
        </Radio>
    );
};

export default RadioSolutionItem;