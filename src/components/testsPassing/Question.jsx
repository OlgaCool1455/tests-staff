import React from 'react';
import {Space, Typography} from "antd";

import RadioGroup from "../common/RadioGroup";

const Question = ({question}) => {
    const solutionOptions = question.solutions.map(q => ({value: q.id, label: q.text}));

    return (
        <Space direction={"vertical"}>
            <Typography.Title level={4} style={{maxHeight: 110, overflowY: "auto"}}>
                {question.text}
            </Typography.Title>
            <RadioGroup options={solutionOptions} onChange={data => console.log(data)}/>
        </Space>
    );
};

export default Question;