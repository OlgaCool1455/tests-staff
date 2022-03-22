import React from 'react';
import {Typography} from "antd";

const TestSteps = ({currentQuestion}) => {
    return (
        <div>
            <Typography.Title>
                {currentQuestion + 1}/10
            </Typography.Title>
        </div>
    );
};

export default TestSteps;