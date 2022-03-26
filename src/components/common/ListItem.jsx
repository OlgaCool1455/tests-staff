import React from 'react';
import {BACKGROUND_COLOR, BORDER_RADIUS} from "../../styleConsts";

const ListItem = ({children}) => {
    return (
        <div
            style={{
                minHeight: 40,
                borderRadius: BORDER_RADIUS,
                backgroundColor: BACKGROUND_COLOR,
                padding: 8,
            }}
        >
            {children}
        </div>
    );
};

export default ListItem;