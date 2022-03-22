import React from 'react';
import {Space} from "antd";
import {LeftOutlined} from "@ant-design/icons";

import MyButton from "../common/MyButton";

const Actions = ({currentQuestion, next, prev, solutionsCount}) => {
    return (
        <Space>
            {currentQuestion > 0 && <MyButton type={"default"} onClick={prev} icon={<LeftOutlined/>}/>}
            {currentQuestion < 9 && <MyButton onClick={next}>Next</MyButton>}
            {
                currentQuestion === 9 && <MyButton
                    type={"success"}
                    disabled={solutionsCount !== 10}
                    onClick={() => console.log('success')}
                >
                    Finish
                </MyButton>
            }
        </Space>
    );
};

export default Actions;