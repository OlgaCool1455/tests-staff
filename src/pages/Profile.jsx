import React, {useContext, useState} from 'react';

import MyCard from "../components/common/MyCard";
import UserInfo from "../components/profile/UserInfo";
import TestsResultsList from "../components/profile/testsResults/TestsResultsList";
import {UserContext} from "../App";
import {useNavigate} from "react-router";

const Profile = () => {
    const navigate = useNavigate();
    const {user} = useContext(UserContext);

    const [activeTab, setActiveTab] = useState("user_info");

    if (!user) {
        navigate("/auth");
        return null;
    }

    const tabList = [
        {
            key: "user_info",
            tab: "Profile",
            Component: <UserInfo user={user}/>,
        },
        {
            key: "results",
            tab: "Results",
            Component: <TestsResultsList user={user}/>,
        },
    ];

    return (
        <MyCard
            height={500}
            tabList={tabList}
            activeTabKey={activeTab}
            onTabChange={key => setActiveTab(key)}
        >
            {tabList.find(t => t.key === activeTab).Component}
        </MyCard>
    );
};

export default Profile;