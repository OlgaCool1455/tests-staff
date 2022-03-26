import React from 'react';
import {Collapse, List, Typography} from "antd";

import {BACKGROUND_COLOR, BORDER_RADIUS, SUCCESS_COLOR} from "../../../styleConsts";
import {CheckCircleOutlined, CloseCircleOutlined} from "@ant-design/icons";

const {Panel} = Collapse;

const TestResultItem = ({result}) => {
    const a = () => {
        return result.questions.filter(q => q.isSuccess).length;
    }

    return (
        <Panel
            header={result.timestamp.getUTCDate()}
            extra={a() >= 8 ? <CheckCircleOutlined style={{color: SUCCESS_COLOR}}/> : <CloseCircleOutlined color={"error"}/>}
            key={result.timestamp.getUTCDate()}
        >
            <List
                dataSource={result.questions}
                renderItem={item => <Typography.Text>{item.text}</Typography.Text>}
            />
        </Panel>
    );
};

export default TestResultItem;