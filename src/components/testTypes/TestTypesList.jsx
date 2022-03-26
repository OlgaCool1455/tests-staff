import React, {useContext, useState} from 'react';
import {List, Space, Typography} from "antd";
import {useNavigate} from "react-router";

import {TestTypesContext} from "../../App";
import TestTypeItem from "./TestTypeItem";
import MyCard from "../common/MyCard";
import MyButton from "../common/MyButton";

const TestTypesList = () => {
    const navigate = useNavigate();

    const {testTypes} = useContext(TestTypesContext);
    const [selectedTypeId, setSelectedTypeId] = useState(null);

    return (
        <MyCard height={500}>
            <Space direction={"vertical"} style={{width: "100%"}}>
                <Typography.Title level={4}>Select the text type</Typography.Title>
                <List
                    dataSource={testTypes || []}
                    renderItem={item => <TestTypeItem
                        type={item}
                        isSelected={!!selectedTypeId && selectedTypeId === item.id}
                        setSelectedType={setSelectedTypeId}
                    />}
                    style={{
                        height: 350,
                        overflowY: "scroll",
                    }}
                />
                <MyButton
                    onClick={() => navigate(`/test/${selectedTypeId}`)}
                    textAlign={"end"}
                    disabled={!selectedTypeId}
                >
                    Start
                </MyButton>
            </Space>
        </MyCard>
    );
};

export default TestTypesList;