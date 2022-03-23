import React from 'react';
import {Card} from "antd";

import {BORDER_RADIUS} from "../../styleConsts";

const MyCard = ({children, width = 600, height, style, ...props}) => {
    return (
        <Card
            style={{
                borderRadius: BORDER_RADIUS,
                width,
                height,
                ...style,
            }}
            {...props}
        >
            {children}
        </Card>
    );
};

export default MyCard;