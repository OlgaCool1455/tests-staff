import React from 'react';
import {List, Typography} from "antd";

import MyCard from "../common/MyCard";
import {ACTIVE_COLOR, BACKGROUND_COLOR} from "../../styleConsts";

const TestTypeItem = ({type, setSelectedType, isSelected}) => {
    const handleClick = () => {
        if (isSelected) {
            setSelectedType(null);
        } else {
            setSelectedType(type.id);
        }
    }

    return (
        <List.Item onClick={handleClick}>
            <MyCard
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    backgroundColor: isSelected ? ACTIVE_COLOR : BACKGROUND_COLOR,
                    cursor: "pointer",
                }}
            >
                <Typography.Title style={{margin: 0}} level={5}>
                    {type.text}
                </Typography.Title>
            </MyCard>
        </List.Item>
    );
};

export default TestTypeItem;