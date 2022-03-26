import React from 'react';
import {Typography} from "antd";

const UserInfo = ({user}) => {
    return (
        <div>
            <Typography.Title level={5}>
                {user.email || "fominienkovd@yandex.ru"}
            </Typography.Title>
            <Typography.Title level={5}>
                {user.username || "DimaEff"}
            </Typography.Title>
        </div>
    );
};

export default UserInfo;