import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router";

import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import MyCard from "../components/common/MyCard";
import {UserContext} from "../App";

const Auth = () => {
    const navigate = useNavigate();
    const user = useContext(UserContext);
    const [activeTab, setActiveTab] = useState("sign_in");

    const tabList = [
        {
            key: "sign_in",
            tab: "Sign In",
            Component: <SignIn/>,
        },
        {
            key: "sign_up",
            tab: "Sign Up",
            Component: <SignUp/>,
        },
    ];

    useEffect(() => {
        if (user) {
            navigate('/');
            return null;
        }
    }, [user]);

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