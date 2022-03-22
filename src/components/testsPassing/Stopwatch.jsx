import React from 'react';
import {Typography} from "antd";
import {useStopwatch} from "react-timer-hook";

const Stopwatch = () => {
    const {minutes, seconds} = useStopwatch({autoStart: true});
    const formattedTime = (time) => time < 10 ? "0" + time : time;

    return (
        <Typography.Title level={5}>
            {formattedTime(minutes)}:{formattedTime(seconds)}
        </Typography.Title>
    );
};

export default Stopwatch;