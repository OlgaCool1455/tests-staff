import React, {useState} from 'react';
import {Card} from "antd";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import MyCard from "../components/common/MyCard";

const Auth = () => {
    const [activeTab, setActiveTab] = useState("sign_in");

    const tabList = [
        {
            key: "sign_in",
            tab: "Sign In",
            Component: <SignIn />,
        },
        {
            key: "sign_up",
            tab: "Sign Up",
            Component: <SignUp />,
        },
    ];

    return (
        <MyCard
            tabList={tabList}
            activeTabKey={activeTab}
            onTabChange={key => setActiveTab(key)}
            bordered={false}
        >
            {tabList.find(t => t.key === activeTab).Component}
        </MyCard>
    );
};

export default Auth;