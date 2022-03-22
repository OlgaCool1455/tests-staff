import React from 'react';
import {Radio, Space} from "antd";

const RadioGroup = ({options, value, onChange}) => {
    return (
        <Radio.Group>
            <Space direction={"vertical"} value={value} onChange={onChange}>
                {options.map(o => <Radio value={o.value} key={o.value}>{o.label}</Radio>)}
            </Space>
        </Radio.Group>
    );
};

export default RadioGroup;